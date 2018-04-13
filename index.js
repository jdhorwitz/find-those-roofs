const express = require('express');
require('./services/geocode');

const app = express();

require('./routes/geoLocationRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
