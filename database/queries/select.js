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
  const beginningOfMainQuery = "SELECT review.review_id, rating, summary, recommend, response, body, date, reviewer_name, helpfulness, ";

  const aliasForFormatToUse = "photoResults";
  const formatYouWant = "json_agg(row_to_json(" + aliasForFormatToUse + "))";
  const queryToDataYouWant = "SELECT id, url FROM photos WHERE review.review_id = photos.review_id";
  const columnYouWantItAs = "photos";
  const originalTableWhoseQueryYouWantToAddTo = "review";

  const aggQuery = "(SELECT " + formatYouWant + " FROM (" + queryToDataYouWant + ") as " + aliasForFormatToUse + ") as " + columnYouWantItAs + " FROM " + originalTableWhoseQueryYouWantToAddTo;

  const endOfMainQuery = " WHERE review.product_id=" + productId;

  const fullQuery = beginningOfMainQuery + aggQuery + endOfMainQuery;

  pool.query(fullQuery, (error, result) => {
    if (error) {
      console.log(error);
      callback(error, null);
    }
    else {
      callback(null, result.rows)
    };
  });
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
    else callback(result.rows[0]);
  })
}

const recommendationsByProductId = async function(productId, callback) {
  const selectionQuery = "SELECT * FROM recommendations WHERE product_id='" + productId + "'";

  pool.query(selectionQuery, (error, result) => {
    if (error) console.log(error);
    else callback(result.rows[0]);
  })
}

const maxProductId = async function() {
  const selectionQuery = "SELECT MAX(product_id) FROM review";

  pool.query(selectionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(JSON.stringify(result.rows));
  })
}

const maxId = async function(tableName, callback) {
  const column = tableName === 'review' ? 'review_id' : 'id';
  const selectionQuery = "SELECT MAX(" + column + ") FROM " + tableName;

  pool.query(selectionQuery, (error, result) => {
    if (error) {
      console.log(error);
      callback(error, result);
    } else {
      callback(null, result.rows[0].max);
    }
  })
}

const recommendedColumns = '(product_id, recommended, notrecommended)';

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

  // console.log('recommended count is ' + recommendedCount);
  // console.log('not recommended count is ' + notRecommendedCount);

  const recommendedValues = get.values([productId, recommendedCount, notRecommendedCount]);
  // console.log('recommended values are ' + recommendedValues);

  insertInto.recommendations(recommendedColumns, recommendedValues);
}

const seedRecommendations = async function() {
  for (let currentId = 2; currentId <= 1000011; currentId++) {
    productIds(currentId);
  }
}

module.exports = {
  reviewsByProductId,
  ratingsByProductId,
  recommendationsByProductId,
  maxId,
}

// photosByProductId(5);

// const callback = function(results) { console.log(JSON.stringify(results)) };
// reviewsByProductId(4, callback);
// productIds(1);

// seedRecommendations();
// productIds(1);
// productIds(2);
// productIds(3);
// productIds(4);
// productIds(5);