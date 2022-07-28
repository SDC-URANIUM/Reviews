const pool = require('../db.js');

const allFromExample = async function() {
  const selectionQuery = "SELECT * FROM example";

  pool.query(selectionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(JSON.stringify(result.rows));
  })
}

const indexFromExample = async function() {
  const selectionQuery = "SELECT * FROM example WHERE name='anthony'";
  pool.query(selectionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(JSON.stringify(result.rows));
  })
}

const characteristicsByName = async function(name) {
  const selectionQuery = "SELECT * FROM characteristics WHERE name='" + name + "'";

  pool.query(selectionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(JSON.stringify(result.rows));
  })
}

const photosByProductId = async function(review_id) {
  const selectionQuery = "SELECT * FROM photos WHERE review_id='" + review_id + "'";

  pool.query(selectionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(JSON.stringify(result.rows));
  })
}

module.exports = {
  allFromExample
}

photosByProductId(5);