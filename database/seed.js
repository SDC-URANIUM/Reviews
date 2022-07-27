const extract = require('./extract-data.js');

const seed = function(exampleData) {
  console.log(JSON.stringify(exampleData))
}
extract.readExampleCSV(seed);