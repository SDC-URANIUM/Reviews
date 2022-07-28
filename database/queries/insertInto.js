const pool = require('../db.js');

const example = async function(columns, values) {
  const insertionQuery = "INSERT INTO example \
    " + columns + " VALUES " + values;

  pool.query(insertionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

module.exports = {
  example
}
