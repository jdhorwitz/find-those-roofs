const express = require('express');
require('./services/geocode');

const app = express();

require('./routes/geoLocationRoutes')(app);

app.use(function(error, req, res, next) {
  res.json({ message: error.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
