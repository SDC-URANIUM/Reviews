const pool = require('../db.js');

const example = async function() {
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

const reviewsInfoTable = async function() {
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

const photosTable = async function() {
  const creationQuery = "CREATE TABLE IF NOT EXISTS photos (\
    id SERIAL PRIMARY KEY,\
    url VARCHAR(255) NOT NULL\
    )";

  pool.query(creationQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const reviewTable = async function() {
  const creationQuery = "CREATE TABLE IF NOT EXISTS review (\
    review_id int NOT NULL PRIMARY KEY,\
    rating int NOT NULL,\
    summary VARCHAR(255) NOT NULL,\
    recommend boolean NOT NULL,\
    response VARCHAR(255) NOT NULL,\
    body VARCHAR(255) NOT NULL,\
    date VARCHAR(255) NOT NULL,\
    reviewer_name VARCHAR(255) NOT NULL,\
    helpfulness int NOT NULL,\
    photo_id int NOT NULL REFERENCES photos(id)\
    )";

  pool.query(creationQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const ratingsTable = async function() {
  const creationQuery = "CREATE TABLE IF NOT EXISTS ratings (\
    id SERIAL PRIMARY KEY,\
    onestar int NOT NULL,\
    twostar int NOT NULL,\
    threestar int NOT NULL,\
    fourstar int NOT NULL,\
    fivestar int NOT NULL\
    )";

  pool.query(creationQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const recommendationsTable = async function() {
  const creationQuery = "CREATE TABLE IF NOT EXISTS recommendations (\
    id SERIAL PRIMARY KEY,\
    recommended int NOT NULL,\
    notrecommended int NOT NULL\
    )";

  pool.query(creationQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const characteristicsTable = async function() {
  const creationQuery = "CREATE TABLE IF NOT EXISTS characteristics (\
    id int NOT NULL PRIMARY KEY,\
    product_id int NOT NULL,\
    name VARCHAR(255) NOT NULL\
    )";

  pool.query(creationQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const metaTable = async function() {
  const creationQuery = "CREATE TABLE IF NOT EXISTS meta (\
    product_id VARCHAR(255) NOT NULL PRIMARY KEY,\
    ratings_id int NOT NULL REFERENCES ratings(id),\
    characteristics_id int NOT NULL REFERENCES characteristics(id)\
    )";

  pool.query(creationQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const allTables = async function() {
  await reviewsInfoTable();
  await photosTable();
  await reviewTable();
  await ratingsTable();
  await recommendationsTable();
  await characteristicsTable();
  await metaTable();
}

module.exports = {
  example,
  reviewsInfoTable,
  metaTable,
  reviewTable,
  photosTable,
  ratingsTable,
  recommendationsTable,
  characteristicsTable,
  allTables
}

// allTables();