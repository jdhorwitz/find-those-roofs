const fs = require('fs');
const path = require('path');
const csv = require('ya-csv');

module.exports = function() {
  // const assembleResult = rows => {
  //   if (!hasHeader || !rows.length) {
  //     return rows;
  //   }
  //   const header = rows.splice(0, 1)[0];
  //   return rows.map(row => {
  //     return header.reduce((obj, field, index) => {
  //       obj[field] = row[index];
  //       return obj;
  //     }, {});
  //   });
  // };

  const reader = csv.createCsvFileReader('./addresses');

  return new Promise((accept, reject) => {
    const rows = [];
    reader.addListener('data', row => {
      console.log('Adding:', row);
      rows.push(row);
    });
    reader.addListener('end', () => accept(rows));
    reader.addListener('error', e => reject(e));
  });
};
