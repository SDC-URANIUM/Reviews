const pool = require('../db.js');

const example = async function (columns, values) {
  const insertionQuery = "INSERT INTO example \
    " + columns + " VALUES " + values;

  pool.query(insertionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const reviewsInfo = async function (columns, values) {
  const insertionQuery = "INSERT INTO reviewsinfo \
    " + columns + " VALUES " + values;

  pool.query(insertionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const meta = async function (columns, values) {
  const insertionQuery = "INSERT INTO meta \
    " + columns + " VALUES " + values;

  pool.query(insertionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const review = async function (columns, values, callback) {
  const insertionQuery = "INSERT INTO review \
    " + columns + " VALUES " + values;

  pool.query(insertionQuery, (error, result) => {
    if (error) {
      console.log('ERROR IN INSERTING REVIEW', error);
      callback(error, null);
    }
    else {
      // console.log(result);
      callback(null, result);
    }
  })
}

const photos = async function (columns, values) {
  const insertionQuery = "INSERT INTO photos VALUES " + values;
  console.log("🚀 ~ file: insertInto.js ~ line 51 ~ photos ~ insertionQuery", insertionQuery)

  pool.query(insertionQuery, (error, result) => {
    if (error) console.log('ERROR INSERTING INTO PHOTOS', error);
    else console.log(result);
  })
}

const ratings = async function (columns, values) {
  const insertionQuery = "INSERT INTO ratings \
    " + columns + " VALUES " + values;

  pool.query(insertionQuery, (error, result) => {
    if (error) console.log('ERROR INSERTING INTO RATINGS', error);
  })
}

const recommendations = async function (columns, values) {
  const insertionQuery = "INSERT INTO recommendations VALUES " + values;

  pool.query(insertionQuery, (error, result) => {
    if (error) console.log('ERROR INSERTING INTO RECOMMENDATIONS', error);
  })
}

const characteristics = async function (values) {
  const insertionQuery = "INSERT INTO characteristics VALUES " + values;

  pool.query(insertionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const characteristicReviews = async function (values) {
  const insertionQuery = "INSERT INTO characteristicreviews VALUES " + values;

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
  characteristicReviews
}
