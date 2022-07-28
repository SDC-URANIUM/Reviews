const pool = require('../db.js');

const example = function() {
  const indexQueryName = "CREATE INDEX IF NOT EXISTS example_name ON example (name)";
  const indexQueryYears = "CREATE INDEX IF NOT EXISTS example_years ON example (years)";
  const indexQueryLanguage = "CREATE INDEX IF NOT EXISTS example_language ON example (language)";

  pool.query(indexQueryName, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
  pool.query(indexQueryYears, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
  pool.query(indexQueryLanguage, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  });
}

example();

module.exports = {
  example
}
