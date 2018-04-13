const geocode = require('../services/geocode');
const readCSVFile = require('../utils/csv');

module.exports = app => {
  app.get('/api/locations', async function(req, res) {
    const rows = await readCSVFile();
    res.json({ response: rows });
  });
};
