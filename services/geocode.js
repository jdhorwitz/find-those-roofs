const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyA7CqV9nov2Y2e368jxmFhZEVb62CU8_r4',
});

module.exports = function getGeoCode(address) {
  googleMapsClient.geocode(
    {
      address,
    },
    function(err, response) {
      if (!err) {
        results.push(response.json.results);
      }
      console.log(`added ${response.json.results}`);
    },
  );
};
