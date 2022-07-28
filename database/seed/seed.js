const extract = require('../extract-data.js');
const seeder = require('./seeders.js');

const example = function() {
  extract.readExampleCSV(seeder.example);
}

const characteristics = function() {
  extract.characteristicDataFromCSV(seeder.characteristics);
}

const reviews = function() {
  const callback = function() { console.log('finished') };
  extract.reviewsDataFromCSV(callback);
}

module.exports = {
  example,
  characteristics
}

reviews();