const geocode = require('../services/geocode');
const readCSVFile = require('../utils/csv');
const lineReader = require('../utils/lineReader');

module.exports = app => {
  app.get('/api/locations', function(req, res) {
    const r = lineReader();
    res.json({ response: r });
  });
};
