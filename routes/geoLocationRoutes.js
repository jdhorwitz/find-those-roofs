const geocode = require('../services/geocode');
const lineReader = require('../utils/lineReader');

module.exports = app => {
  app.get('/api/locations', async function(req, res) {
    res.json({ response: await lineReader() });
  });
};
