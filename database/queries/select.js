const pool = require('../db.js');
const insertInto = require('./insertInto.js');
const get = require('../helpers/get.js');

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

const reviewsByProductId = async function(productId, callback) {
  const selectionQuery = "SELECT * FROM review WHERE product_id=" + productId;

  pool.query(selectionQuery, (error, result) => {
    if (error) console.log(error);
    else callback(result.rows);
  })
}

// const productIds = async function(productId) {
//   const selectionQuery = "SELECT * FROM review WHERE product_id=" + productId;

//   pool.query(selectionQuery, (error, result) => {
//     if (error) console.log(error);
//     else populateRatings(result.rows, productId);
//   })
// }

const allRatings = async function() {
  const selectionQuery = "SELECT * FROM ratings";

  pool.query(selectionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(JSON.stringify(result.rows));
  })
}

const ratingsByProductId = async function(productId, callback) {
  const selectionQuery = "SELECT * FROM ratings WHERE product_id='" + productId + "'";

  pool.query(selectionQuery, (error, result) => {
    if (error) console.log(error);
    else callback(result.rows);
  })
}

const maxProductId = async function() {
  const selectionQuery = "SELECT MAX(product_id) FROM review";

  pool.query(selectionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(JSON.stringify(result.rows));
  })
}

// const ratingsColumns = '(product_id, onestar, twostar, threestar, fourstar, fivestar)';

// const populateRatings = async function(data, productId) {
//   let oneStarCount = 0;
//   let twoStarCount = 0;
//   let threeStarCount = 0;
//   let fourStarCount = 0;
//   let fiveStarCount = 0;

//   for (const entry of data) {
//     const currentRating = entry.rating;

//     switch(currentRating) {
//       case 1:
//         oneStarCount++;
//         break;
//       case 2:
//         twoStarCount++;
//         break;
//       case 3:
//         threeStarCount++;
//         break;
//       case 4:
//         fourStarCount++;
//         break;
//       case 5:
//         fiveStarCount++;
//         break;
//     }
//   }

  // console.log('product id is ' + productId);
  // console.log('one star count is ' + oneStarCount);
  // console.log('two star count is ' + twoStarCount);
  // console.log('three star count is ' + threeStarCount);
  // console.log('four star count is ' + fourStarCount);
  // console.log('five star count is ' + fiveStarCount);

//   const ratingsValues = get.values([productId, oneStarCount, twoStarCount, threeStarCount, fourStarCount, fiveStarCount]);
//   // console.log('rating values are ' + ratingsValues);

//   insertInto.ratings(ratingsColumns, ratingsValues);
// }

// const seedRatings = async function() {
//   for (let currentId = 11; currentId <= 1000011; currentId++) {
//     productIds(currentId);
//   }
// }

module.exports = {
  allFromExample
}

const callback = function(results) { console.log(JSON.stringify(results)) };
ratingsByProductId(1000011, callback);
// allRatings();
// productIds(1);
// productIds(2);
// productIds(3);
// productIds(4);
// productIds(5);