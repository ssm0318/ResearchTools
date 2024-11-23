const store = require('app-store-scraper');
const fs = require('fs');

const fields = [
  'id',
  'userName',
  'userUrl',
  'version',
  'score',
  'title',
  'text',
  'updated',
  'url'
]

const appIds = [
  "AlexisBarreyat.BeReal"
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
  var data = store.reviews({
    appId: appId,
    sort: store.sort.HELPFUL,
    page: 11
  });

  data.then(function (res) {
    let csv = [];
    for (let i = 0; i < res.length; i++) {
      let row = [];
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
    fs.writeFileSync("./output/review_bereal_appstore_11.csv", aggrData);
  })
}
