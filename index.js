const express = require('express');
const keys = require('./config/keys');
require('./services/geocode');

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
