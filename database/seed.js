const extract = require('./extract-data.js');
const pool = require('./db.js');

const seed = function (exampleData) {
  useDatabase();
  // for (const entry of exampleData) {
  //   insertIntoDb(entry);
  // }
}

const insertIntoDb = function (entry, databaseName) {
  const keys = Object.keys(entry);
  const columns = getColumns(keys);

  const values = Object.values(entry);
  const tableValues = getValues(values);

  const insertionQuery = 'INSERT INTO example ' + columns + ' VALUES ' + tableValues;
  pool.query(insertionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(JSON.stringify(result));
  })
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
extract.readExampleCSV(seed);