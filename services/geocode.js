const csv = require('fast-csv');
const path = require('path');
const keys = require('../config/keys');

const csvPath = path.resolve('./addresses.csv');

const googleMapsClient = require('@google/maps').createClient({
  key: keys.GOOGLE_GEOCODE_KEY,
});

let results = [];

const csvstream = new Promise((resolve, reject) => {
  csv
    .fromPath(csvPath)
    .on('data', function(row) {
      googleMapsClient.geocode(
        {
          address: row[0],
        },
        function(err, response) {
          if (!err) {
            results.push(response.json.results);
          }
        },
      );
    })
    .on('end', function() {
      resolve(
        results.filter(({ geometry }) => geometry.location_type !== 'ROOFTOP'),
      );
    })
    .on('error', function(error) {
      reject(error);
    });
});

module.exports = async function() {
  await csvstream;
  return results;
};
