const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyA7CqV9nov2Y2e368jxmFhZEVb62CU8_r4',
});
const csv = require('fast-csv');

let results = [];

const getData = () => {
  csv.fromPath('../data/addresses.csv').transform(function(data) {
    data.forEach(async d => await getGeoCode(d[0]));
  });
};

const getGeoCode = address => {
  googleMapsClient.geocode(
    {
      address,
    },
    function(err, response) {
      if (!err) {
        results.push(response.json.results);
      }
    },
  );
};

module.exports = async function() {
  await getData();
  return results;
};
