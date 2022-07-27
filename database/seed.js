const extract = require('./extract-data.js');
const pool = require('./db.js');

const seed = function(exampleData) {
  console.log(JSON.stringify(exampleData))
}

const useDatabase = function() {
  pool.query('SELECT * FROM example', (error, result) => {
    if (error) console.log(error);
    else console.log(JSON.stringify(result.rows));
  })
}

useDatabase();
// extract.readExampleCSV(seed);