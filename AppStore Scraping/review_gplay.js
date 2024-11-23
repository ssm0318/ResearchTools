const gplay = require('google-play-scraper');
const fs = require('fs');

const fields = [
  'id',
  'userName',
  'version',
  'score',
  'title',
  'text',
  'updated',
  'url',
  'thumbsUp'
]

const appIds = [
  "com.bereal.ft"
]

var aggrData = fields.join(',') + "\n";

concat_data();

async function concat_data() {
  for (idx in appIds) {
    get_data(appIds[idx]);
  }
  console.log("SUCCESS");
}

async function get_data(appId) {
  var data = gplay.reviews({
    appId: appId,
    sort: gplay.sort.HELPFULNESS,
    num: 5000000,
    lang: 'en',
    country: 'us'
  });

  data.then(function (res) {
    let csv = [];
    let n = res['data'].length;
    for (let i = 0; i < n; i++) {
      let row = [];
      for (let key in fields) { row.push(res['data'][i][fields[key]]); }
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
    fs.writeFileSync("./output/review_bereal_gplay.csv", aggrData);
  })
}
