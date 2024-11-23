// https://github.com/facundoolano/google-play-scraper

const gplay = require('google-play-scraper');
const fs = require('fs');

const fields = [
  'appId',
  'url',
  'title',
  'description',
  'summary',
  'installs',
  'minInstalls',
  'maxInstalls',
  'score',
  'scoreText',
  'ratings',
  'reviews',
  'price',
  'free',
  'developer',
  'developerId',
  'developerWebsite',
  'genre',
  'updated',
  'editorsChoice',
  'screenshots',
  'video',
  'videoImage'
]

keywords = [
  'social media',
  'social media platform',
  'social media site',
  'social site',
  'online community',
  'social network service',
  'genuine relationship',
  'genuine conversation',
  'genuine interaction',
  'genuine communication',
  'genuine friend',
  'authentic relationship',
  'authentic conversation',
  'authentic interaction',
  'authentic communication',
  'authentic friend',
  'intimate friend',
  'close friend',
  'closer friend',
  'truthful relationship',
  'meaningful relationship',
  'deep friendship',
  'friend deeper',
  'true friend',
  'friend trust',
  'real friend',
  'best friend'
]

var aggrData = "keyword," + fields.join(',') + "\n";

concat_data();

async function concat_data() {
  for (idx in keywords) {
    get_data(keywords[idx]);
  }
  console.log('SUCCESS');
}

async function get_data(keyword) {
  var data = gplay.search({
    term: keyword,
    num: 30,
    fullDetail: true
  });

  data.then(function (res) {
    let csv = [];
    for (let i = 0; i < res.length; i++) {
      let row = [];
      row.push(keyword);
      for (let key in fields) { row.push(res[i][fields[key]]); }
      csv.push(row.map(function (item) {
        strRow = item ? '' + item + '' : '.';
        strRow = strRow.replaceAll(",", "\\");
        strRow = strRow.replace(/\r?\n|\r/g, " ");
        return strRow;
      }).join(','));
    }
    csv_data = csv.join('\n');
    return csv_data;
  }).then(function (csv_data) {
    aggrData += csv_data + "\n";
    return aggrData;
  }).then(function (aggrData) {
    fs.writeFileSync("./output/search_gplay.csv", aggrData);
  })
}