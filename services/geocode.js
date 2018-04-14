const lineReader = require('../utils/lineReader');
const keys = require('../config/keys');

let results = lineReader().then(x => console.log(x));
