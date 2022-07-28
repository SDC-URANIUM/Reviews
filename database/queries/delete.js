const pool = require('../db.js');

const example = async function() {
  const deletionQuery = "DROP TABLE IF EXISTS example";

  pool.query(deletionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const reviewsInfoTable = async function() {
  const deletionQuery = "DROP TABLE IF EXISTS reviewsinfo";

  pool.query(deletionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const metaTable = async function() {
  const deletionQuery = "DROP TABLE IF EXISTS meta";

  pool.query(deletionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const reviewTable = async function() {
  const deletionQuery = "DROP TABLE IF EXISTS review";

  pool.query(deletionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const photosTable = async function() {
  const deletionQuery = "DROP TABLE IF EXISTS photos";

  pool.query(deletionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const ratingsTable = async function() {
  const deletionQuery = "DROP TABLE IF EXISTS ratings";

  pool.query(deletionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const recommendationsTable = async function() {
  const deletionQuery = "DROP TABLE IF EXISTS recommendations";

  pool.query(deletionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const characteristicsTable = async function() {
  const deletionQuery = "DROP TABLE IF EXISTS characteristics";

  pool.query(deletionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const characteristicReviewsTable = async function() {
  const deletionQuery = "DROP TABLE IF EXISTS characteristicreviews";

  pool.query(deletionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}


const allTables = async function() {
  await example();
  await reviewsInfoTable();
  await metaTable();
  await reviewTable();
  await ratingsTable();
  await recommendationsTable();
  await characteristicReviewsTable();
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

allTables();
// photosTable();
// example();
// characteristicsTable();