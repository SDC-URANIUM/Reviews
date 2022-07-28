const extract = require('./extract-data.js');
const pool = require('./db.js');
const insertInto = require('./queries/insertInto.js');
const get = require('./helpers/get.js');

const seedEntry = function (exampleData) {
  for (const entry of exampleData) {
    const keys = Object.keys(entry);
    const columns = getColumns(keys);

    const values = Object.values(entry);
    const tableValues = getValues(values);

    insertInto.example(columns, tableValues);
  }
}

const getColumns = function (keys) {
  let columnConstructor = '(';
  for (key of keys) {
    columnConstructor += key + ', ';
  }

  const columns = columnConstructor.slice(0, columnConstructor.length - 2) + ')';
  return columns;
}

const getValues = function (keys) {
  let valueConstructor = '(';
  for (key of keys) {
    valueConstructor += '\'' + key + '\'' + ', ';
  }

  const values = valueConstructor.slice(0, valueConstructor.length - 2) + ')';
  return values;
}

const useDatabase = function () {
  pool.query('SELECT * FROM example', (error, result) => {
    if (error) console.log(error);
    else {
      for (const row of result.rows) {
        console.log(JSON.stringify(row));
      }
    }

    pool.end();
  })
}

// useDatabase();
extract.readExampleCSV(seedEntry);