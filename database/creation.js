const pool = require('./db.js');

const createExample = async function() {
  const creationQuery = "CREATE TABLE IF NOT EXISTS example (\
    name VARCHAR(255) NOT NULL,\
    years VARCHAR(255) NOT NULL,\
    language VARCHAR(255) NOT NULL\
    )";

  pool.query(creationQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const createReviewsInfo = async function() {
  const creationQuery = "CREATE TABLE IF NOT EXISTS reviewsinfo (\
    Product VARCHAR(255) NOT NULL PRIMARY KEY,\
    page int NOT NULL,\
    count int NOT NULL\
    )";

  pool.query(creationQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const createMeta = async function() {
  const creationQuery = "CREATE TABLE IF NOT EXISTS example (\
    product_id VARCHAR(255) NOT NULL PRIMARY KEY,\
    ratings_id: int NOT NULL FOREIGN KEY,\
    characteristics_id: int NOT NULL FOREIGN KEY\
    )";

  pool.query(creationQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const deleteExample = async function() {
  const deletionQuery = "DROP TABLE example";

  pool.query(deletionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

createExample();