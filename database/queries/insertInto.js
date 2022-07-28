const pool = require('../db.js');

const example = async function(columns, values) {
  const insertionQuery = "INSERT INTO example \
    " + columns + " VALUES " + values;

  pool.query(insertionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const reviewsInfoTable = async function(columns, values) {
  const insertionQuery = "INSERT INTO reviewsinfo \
    " + columns + " VALUES " + values;

  pool.query(insertionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const metaTable = async function(columns, values) {
  const insertionQuery = "INSERT INTO meta \
    " + columns + " VALUES " + values;

  pool.query(insertionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const reviewTable = async function(columns, values) {
  const insertionQuery = "INSERT INTO review \
    " + columns + " VALUES " + values;

  pool.query(insertionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const photosTable = async function(columns, values) {
  const insertionQuery = "INSERT INTO photos \
    " + columns + " VALUES " + values;

  pool.query(insertionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const ratingsTable = async function(columns, values) {
  const insertionQuery = "INSERT INTO ratings \
    " + columns + " VALUES " + values;

  pool.query(insertionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const recommendationsTable = async function(columns, values) {
  const insertionQuery = "INSERT INTO recommendations \
    " + columns + " VALUES " + values;

  pool.query(insertionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const characteristicsTable = async function(columns, values) {
  const insertionQuery = "INSERT INTO characteristics \
    " + columns + " VALUES " + values;

  pool.query(insertionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
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
}
