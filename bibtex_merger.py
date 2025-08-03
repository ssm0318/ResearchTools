#!/usr/bin/env python3
"""
BibTeX Duplicate Merger - High Performance Version

Merges duplicate BibTeX entries across multiple .bib files using fuzzy matching
on titles and authors. Optimized for systems with abundant RAM (16GB+).
"""

import os
import glob
import re
from collections import defaultdict
from typing import List, Dict, Set, Tuple, Optional
from concurrent.futures import ProcessPoolExecutor, ThreadPoolExecutor
from multiprocessing import cpu_count
import bibtexparser
from bibtexparser.bwriter import BibTexWriter
from bibtexparser.bparser import BibTexParser
from thefuzz import fuzz
import argparse
import numpy as np
from functools import partial
import pickle
import time


def clean_string(text: str) -> str:
    """Clean and normalize text for comparison."""
    if not text:
        return ""
    # Remove LaTeX commands, braces, and normalize whitespace
    text = re.sub(r'\\[a-zA-Z]+\{([^}]*)\}', r'\1', text)
    text = re.sub(r'[{}]', '', text)
    text = re.sub(r'\s+', ' ', text).strip().lower()
    return text


def extract_authors(entry: Dict) -> str:
    """Extract and clean author names from entry."""
    author_fields = ['author', 'authors', 'editor']
    for field in author_fields:
        if field in entry:
            authors = clean_string(entry[field])
            author_list = [a.strip() for a in authors.split(' and ')]
            return ' '.join(author_list[:3])
    return ""


def create_signature(entry: Dict) -> Tuple[str, str, int]:
    """Create a signature (title, authors, hash) for an entry."""
    title = clean_string(entry.get('title', ''))
    authors = extract_authors(entry)
    # Create a fast hash for pre-filtering
    signature_hash = hash(title[:50] + authors[:30])
    return (title, authors, signature_hash)


def merge_single_group(args: Tuple[List[int], List[Dict]]) -> Dict:
    """Merge a single group of duplicate entries."""
    group_indices, entries = args

    if len(group_indices) == 1:
        return entries[group_indices[0]]

    group_entries = [entries[i] for i in group_indices]

    # Find the most complete entry as base
    merged = max(group_entries, key=lambda e: len(e))
    merged = dict(merged)

    # Merge fields from other entries
    for entry in group_entries:
        for key, value in entry.items():
            if key not in merged or not merged[key] or len(str(value)) > len(str(merged[key])):
                merged[key] = value

    # Generate clean ID
    title_words = clean_string(merged.get('title', '')).split()[:3]
    year = merged.get('year', merged.get('date', ''))[:4] if merged.get('year', merged.get('date', '')) else 'noyear'

    if title_words:
        new_id = ''.join(word.capitalize() for word in title_words if word.isalnum())
        new_id = f"{new_id}{year}"
    else:
        new_id = f"entry{year}"

    merged['ID'] = new_id
    return merged


def compare_entries_batch(args: Tuple[List[Tuple[int, Tuple]], List[Tuple], int, int]) -> List[Tuple[int, int]]:
    """
    Compare a batch of entries against all subsequent entries and return duplicate pairs.
    This is an O(N^2) comparison, parallelized across batches.
    """
    entries_batch, all_signatures, start_idx, threshold = args
    duplicates = []

    for i, (entry_idx, sig) in enumerate(entries_batch):
        title1, authors1, hash1 = sig

        # Compare with all subsequent entries
        for j in range(entry_idx + 1, len(all_signatures)):
            title2, authors2, hash2 = all_signatures[j]

            # Quick hash-based pre-filter (exact match is a strong signal)
            if hash1 == hash2 and entry_idx != j:
                duplicates.append((entry_idx, j))
                continue

            # Fuzzy title comparison
            title_sim = fuzz.ratio(title1, title2)

            if title_sim >= threshold:
                if authors1 and authors2:
                    author_sim = fuzz.ratio(authors1, authors2)
                    if author_sim >= max(70, threshold - 15):
                        duplicates.append((entry_idx, j))
                else:
                    # If authors are missing, rely on a high title score
                    if title_sim >= 90:
                        duplicates.append((entry_idx, j))
            elif title_sim >= threshold - 10:
                if authors1 and authors2:
                    author_sim = fuzz.ratio(authors1, authors2)
                    if author_sim >= threshold:
                        duplicates.append((entry_idx, j))
    return duplicates


class HighPerformanceBibTeXMerger:
    def __init__(self, similarity_threshold: int = 85, max_workers: Optional[int] = None):
        """
        Initialize the high-performance merger.
        
        Args:
            similarity_threshold: Minimum similarity score for duplicates
            max_workers: Number of worker processes (default: CPU count)
        """
        self.similarity_threshold = similarity_threshold
        self.max_workers = max_workers or cpu_count()
        self.entries_cache = []
        self.signatures_cache = []
        
    def load_bib_files_parallel(self, file_pattern: str) -> List[Dict]:
        """Load BibTeX files in parallel."""
        files = glob.glob(file_pattern)
        
        if not files:
            print("No files found matching pattern!")
            return []
        
        print(f"Loading {len(files)} BibTeX files in parallel...")
        
        def load_single_file(filename: str) -> List[Dict]:
            try:
                parser = BibTexParser()
                parser.ignore_nonstandard_types = False
                parser.homogenise_fields = False
                
                with open(filename, 'r', encoding='utf-8') as f:
                    bib_db = bibtexparser.load(f, parser=parser)
                    for entry in bib_db.entries:
                        entry['_source_file'] = filename
                    return bib_db.entries
            except Exception as e:
                print(f"Warning: Could not load {filename}: {e}")
                return []
        
        # Use ThreadPoolExecutor for I/O bound file loading
        with ThreadPoolExecutor(max_workers=min(len(files), self.max_workers)) as executor:
            results = list(executor.map(load_single_file, files))
        
        # Flatten results and cache
        all_entries = []
        for file_entries in results:
            all_entries.extend(file_entries)
        
        self.entries_cache = all_entries
        print(f"Loaded {len(all_entries)} total entries")
        return all_entries
    
    def create_signatures_parallel(self, entries: List[Dict]) -> List[Tuple[str, str, int]]:
        """Create signatures for all entries in parallel."""
        print("Creating signatures in parallel...")
        
        # Use ProcessPoolExecutor for CPU-bound signature creation
        chunk_size = max(1, len(entries) // (self.max_workers * 4))
        
        with ProcessPoolExecutor(max_workers=self.max_workers) as executor:
            signatures = list(executor.map(create_signature, entries, chunksize=chunk_size))
        
        self.signatures_cache = signatures
        print(f"Created {len(signatures)} signatures")
        return signatures
    
    def find_duplicates_parallel(self, entries: List[Dict]) -> List[List[int]]:
        """Find duplicate groups using parallel processing and optimized algorithms."""
        print("Finding duplicates with parallel processing...")
        start_time = time.time()

        if not self.signatures_cache:
            signatures = self.create_signatures_parallel(entries)
        else:
            signatures = self.signatures_cache

        # Create batches for parallel processing
        n_entries = len(entries)
        batch_size = max(100, n_entries // (self.max_workers * 8))

        # Prepare batches with entry indices
        batches = []
        for i in range(0, n_entries, batch_size):
            batch_entries = [(j, signatures[j]) for j in range(i, min(i + batch_size, n_entries))]
            batches.append((batch_entries, signatures, i, self.similarity_threshold))

        print(f"Processing {len(batches)} batches with {self.max_workers} workers...")

        # Process batches in parallel
        all_duplicate_pairs = []
        with ProcessPoolExecutor(max_workers=self.max_workers) as executor:
            batch_results = executor.map(compare_entries_batch, batches)
            for batch_pairs in batch_results:
                all_duplicate_pairs.extend(batch_pairs)

        # Build connected components from duplicate pairs
        duplicate_groups = self._build_connected_components(all_duplicate_pairs, n_entries)

        elapsed = time.time() - start_time
        print(f"Found {len([g for g in duplicate_groups if len(g) > 1])} duplicate groups in {elapsed:.2f}s")

        return duplicate_groups
    
    def _build_connected_components(self, pairs: List[Tuple[int, int]], n_entries: int) -> List[List[int]]:
        """Build connected components from duplicate pairs using Union-Find."""
        # Union-Find data structure for efficient connected components
        parent = list(range(n_entries))
        rank = [0] * n_entries
        
        def find(x):
            if parent[x] != x:
                parent[x] = find(parent[x])  # Path compression
            return parent[x]
        
        def union(x, y):
            px, py = find(x), find(y)
            if px == py:
                return
            # Union by rank
            if rank[px] < rank[py]:
                parent[px] = py
            elif rank[px] > rank[py]:
                parent[py] = px
            else:
                parent[py] = px
                rank[px] += 1
        
        # Union all duplicate pairs
        for i, j in pairs:
            union(i, j)
        
        # Group by root parent
        groups = defaultdict(list)
        for i in range(n_entries):
            groups[find(i)].append(i)
        
        return list(groups.values())
    
    def merge_entries_parallel(self, entries: List[Dict], duplicate_groups: List[List[int]]) -> List[Dict]:
        """Merge duplicate groups in parallel."""
        print("Merging duplicate groups...")
        
        # Prepare data for parallel processing
        merge_data = [(group_indices, entries) for group_indices in duplicate_groups]
        
        # Process groups in parallel
        chunk_size = max(1, len(duplicate_groups) // (self.max_workers * 2))
        
        with ProcessPoolExecutor(max_workers=self.max_workers) as executor:
            merged_entries = list(executor.map(merge_single_group, merge_data, chunksize=chunk_size))
        
        # Count duplicates
        total_duplicates = sum(len(group) - 1 for group in duplicate_groups if len(group) > 1)
        print(f"Merged {total_duplicates} duplicate entries into {len(merged_entries)} unique entries")
        
        return merged_entries
    
    def write_output_files(self, merged_entries: List[Dict], max_lines: int = 10000, 
                           base_filename: str = "references") -> None:
        """Write merged entries to output files."""
        print(f"Writing {len(merged_entries)} entries to output files...")
        
        writer = BibTexWriter()
        writer.indent = '  '
        writer.align_values = True
        
        current_lines = 0
        file_num = 1
        current_entries = []
        
        for entry in merged_entries:
            entry_lines = 2 + len(entry)
            
            if current_lines + entry_lines > max_lines and current_entries:
                self._write_single_file(current_entries, writer, f"{base_filename}{file_num}.bib")
                file_num += 1
                current_entries = []
                current_lines = 0
            
            current_entries.append(entry)
            current_lines += entry_lines
        
        if current_entries:
            self._write_single_file(current_entries, writer, f"{base_filename}{file_num}.bib")
        
        print(f"Output written to {file_num} file(s)")
    
    def _write_single_file(self, entries: List[Dict], writer: BibTexWriter, filename: str):
        """Write entries to a single BibTeX file."""
        bib_db = bibtexparser.bibdatabase.BibDatabase()
        bib_db.entries = entries
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(writer.write(bib_db))
        
        print(f"  Written {len(entries)} entries to {filename}")
    
    def merge_all(self, file_pattern: str, output_base: str = "references", 
                  max_lines: int = 10000) -> None:
        """Main method optimized for high-memory systems."""
        total_start = time.time()
        
        # Load all entries in parallel
        all_entries = self.load_bib_files_parallel(file_pattern)
        
        if not all_entries:
            print("No entries found!")
            return
        
        # Pre-create signatures to leverage RAM
        self.create_signatures_parallel(all_entries)
        
        # Find duplicates with parallel processing
        duplicate_groups = self.find_duplicates_parallel(all_entries)
        
        # Merge duplicates in parallel
        merged_entries = self.merge_entries_parallel(all_entries, duplicate_groups)
        
        # Write output files
        self.write_output_files(merged_entries, max_lines, output_base)
        
        total_time = time.time() - total_start
        print(f"Total processing time: {total_time:.2f} seconds")
        print(f"Memory usage: Kept ~{len(all_entries)} entries + signatures in RAM")


def main():
    parser = argparse.ArgumentParser(description='High-performance BibTeX duplicate merger')
    parser.add_argument('files', nargs='?', default='*.bib', 
                        help='File pattern for input BibTeX files (default: *.bib)')
    parser.add_argument('--output', '-o', default='references',
                        help='Base name for output files (default: references)')
    parser.add_argument('--max-lines', '-m', type=int, default=10000,
                        help='Maximum lines per output file (default: 10000)')
    parser.add_argument('--threshold', '-t', type=int, default=85,
                        help='Similarity threshold for duplicate detection (default: 85)')
    parser.add_argument('--workers', '-w', type=int, default=None,
                        help=f'Number of worker processes (default: {cpu_count()})')
    
    args = parser.parse_args()
    
    print(f"Starting high-performance merger with {args.workers or cpu_count()} workers")
    
    merger = HighPerformanceBibTeXMerger(
        similarity_threshold=args.threshold,
        max_workers=args.workers
    )
    merger.merge_all(args.files, args.output, args.max_lines)


if __name__ == "__main__":
    main()

