const store = require('app-store-scraper');
const fs = require('fs');

const fields = [
  'id',
  'appId',
  'title',
  'url',
  'description',
  'genres',
  'primaryGenre',
  'contentRating',
  'released',
  'updated',
  'version',
  'price',
  'free',
  'developer',
  'developerId',
  'developerUrl',
  'score',
  'reviews',
  'currentVersionScore',
  'currentVersionReviews',
  'screenshots'
]

const appIds = [
  "com.BeyondSmallTalk.BSTm1"
]

var aggrData = "center node," + fields.join(',') + "\n";

concat_data();

async function concat_data() {
  for (idx in appIds) {
    get_data(appIds[idx]);
  }
  console.log("SUCCESS");
}

async function get_data(appId) {
  var data = store.similar({
    appId: appId
  });

  data.then(function (res) {
    let csv = [];
    for (let i = 0; i < res.length; i++) {
      let row = [];
      row.push(appId);
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
    fs.writeFileSync("./output/similar_appstore.csv", aggrData);
  })
}
