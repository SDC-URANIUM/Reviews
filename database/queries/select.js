const pool = require('../db.js');

const allFromExample = async function() {
  const selectionQuery = "SELECT * FROM example";

  pool.query(selectionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(JSON.stringify(result.rows));
  })
}

module.exports = {
  allFromExample
}

allFromExample();