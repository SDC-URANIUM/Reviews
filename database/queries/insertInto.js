const pool = require('../db.js');

const example = async function(columns, values) {
  const insertionQuery = "INSERT INTO example \
    " + columns + " VALUES " + values;

  pool.query(insertionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const reviewsInfo = async function(columns, values) {
  const insertionQuery = "INSERT INTO reviewsinfo \
    " + columns + " VALUES " + values;

  pool.query(insertionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const meta = async function(columns, values) {
  const insertionQuery = "INSERT INTO meta \
    " + columns + " VALUES " + values;

  pool.query(insertionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const review = async function(columns, values) {
  const insertionQuery = "INSERT INTO review \
    " + columns + " VALUES " + values;

  pool.query(insertionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const photos = async function(columns, values) {
  const insertionQuery = "INSERT INTO photos \
    " + columns + " VALUES " + values;

  pool.query(insertionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const ratings = async function(columns, values) {
  const insertionQuery = "INSERT INTO ratings \
    " + columns + " VALUES " + values;

  pool.query(insertionQuery, (error, result) => {
    if (error) console.log(error);
  })
}

const recommendations = async function(columns, values) {
  const insertionQuery = "INSERT INTO recommendations \
    " + columns + " VALUES " + values;

  pool.query(insertionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const characteristics = async function(columns, values) {
  const insertionQuery = "INSERT INTO characteristics \
    " + columns + " VALUES " + values;

  pool.query(insertionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}


module.exports = {
  example,
  reviewsInfo,
  meta,
  review,
  photos,
  ratings,
  recommendations,
  characteristics,
}
