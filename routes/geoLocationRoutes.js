const geocode = require('../services/geocode');

module.exports = app => {
  app.get('/api/locations', async function(req, res) {
    res.json({ response: await geocode() });
  });
};
