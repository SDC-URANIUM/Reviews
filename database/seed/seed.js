const extract = require('../extract-data.js');
const seeder = require('./seeders.js');

const example = function() {
  extract.readExampleCSV(seeder.example);
}

const characteristics = function() {
  extract.characteristicDataFromCSV(seeder.characteristics);
}

module.exports = {
  example,
  characteristics
}