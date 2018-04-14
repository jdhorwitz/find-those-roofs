const lineReader = require('line-reader');

const results = [];

module.exports = function() {
  lineReader.eachLine('addresses.csv', function(line, last) {
    console.log('in here');
    results.push(line);

    if (last) {
      return results;
    }
  });
};
