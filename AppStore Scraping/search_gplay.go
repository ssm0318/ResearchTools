package main

import (
    "fmt"

    "github.com/n0madic/google-play-scraper/pkg/search"
)

func main() {
    query := search.NewQuery("game", search.PricePaid,
        search.Options{
            Country:  "US",
            Language: "en",
            Number:   100,
            ScoreMin: 0,
        })
	
    err := query.Run()
    if err != nil {
        panic(err)
    }

    errors := query.LoadMoreDetails(20)
    if len(errors) > 0 {
        panic(errors[0])
    }

	fmt.Println(len(query.Results))

    for _, app := range query.Results {
		fmt.Println(app.Title, app.URL)
    }
}
