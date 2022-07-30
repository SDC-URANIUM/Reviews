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
  const selectionQuery = "SELECT review.review_id, rating, summary, recommend, response, body, date, reviewer_name, helpfulness, ";
  const aggQuery = "json_build_object('photos', (SELECT json_agg(row_to_json(photos)) FROM (SELECT id, url FROM photos WHERE review.review_id = photos.review_id) photos))  FROM review"
  const joinQuery = " WHERE review.product_id=" + productId;
  // " FULL OUTER JOIN photos ON review.review_id = photos.review_id WHERE review.product_id=" + productId
  // JOIN photos ON review.review_id = photos.review_id
  const fullQuery = selectionQuery + aggQuery + joinQuery;

  pool.query(fullQuery, (error, result) => {
    if (error) {
      console.log(error);
      callback(error, null);
    }
    else {
      console.log(JSON.stringify(result.rows));
      callback(null, result.rows)
    };
  })
}

const productIds = async function(productId) {
  const selectionQuery = "SELECT * FROM review WHERE product_id=" + productId;

  pool.query(selectionQuery, (error, result) => {
    if (error) console.log(error);
    else populateRecommendations(result.rows, productId);
  })
}

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

const recommendedColumns = '(product_id, recommended, not recommended)';

const populateRecommendations = async function(data, productId) {
  let recommendedCount = 0;
  let notRecommendedCount = 0;

  for (const entry of data) {
    const isRecommended = entry.recommend;

    if (isRecommended) {
      recommendedCount++;
    } else if (isRecommended === false) {
      notRecommendedCount++;
    }
  }

  console.log('recommended count is ' + recommendedCount);
  console.log('not recommended count is ' + notRecommendedCount);

  const recommendedValues = get.values([productId, recommendedCount, notRecommendedCount]);
  console.log('rating values are ' + recommendedValues);

  insertInto.recommendations(recommendedColumns, recommendedValues);
}

const seedRatings = async function() {
  for (let currentId = 11; currentId <= 1000011; currentId++) {
    productIds(currentId);
  }
}

module.exports = {
  reviewsByProductId
}

// photosByProductId(5);

// const callback = function(results) { console.log(JSON.stringify(results)) };
// reviewsByProductId(4, callback);
// productIds(1);

// allRatings();
// productIds(1);
// productIds(2);
// productIds(3);
// productIds(4);
// productIds(5);