
const insertInto = require('../queries/insertInto.js');
const get = require('../helpers/get.js');

const example = function (exampleData) {
  for (const entry of exampleData) {
    const keys = Object.keys(entry);
    const columns = get.columns(keys);

    const values = Object.values(entry);
    const tableValues = get.values(values);

    insertInto.example(columns, tableValues);
  }
}

const reviewsInfo = function(reviewsInfoData) {
  for (const entry of reviewsInfoData) {
    const keys = Object.keys(entry);
    const columns = get.columns(keys);

    const values = Object.values(entry);
    const tableValues = get.values(values);

    insertInto.reviewsInfo(columns, tableValues);
  }
}

const characteristics = function(characteristicsData) {
  for (const entry of characteristicsData) {
    const keys = Object.keys(entry);
    const columns = get.columns(keys);

    const values = Object.values(entry);
    const tableValues = get.values(values);

    insertInto.characteristics(columns, tableValues);
  }
}

const meta = function(metaData) {
  for (const entry of metaData) {
    const keys = Object.keys(entry);
    const columns = get.columns(keys);

    const values = Object.values(entry);
    const tableValues = get.values(values);

    insertInto.meta(columns, tableValues);
  }
}

const review = function(reviewData) {
  for (const entry of reviewData) {
    const keys = Object.keys(entry);
    const columns = get.columns(keys);

    const values = Object.values(entry);
    const tableValues = get.values(values);

    insertInto.review(columns, tableValues);
  }
}

const photos = function(photosData) {
  for (const entry of photosData) {
    const keys = Object.keys(entry);
    const columns = get.columns(keys);

    const values = Object.values(entry);
    const tableValues = get.values(values);

    insertInto.photos(columns, tableValues);
  }
}

const ratings = function(ratingsData) {
  for (const entry of ratingsData) {
    const keys = Object.keys(entry);
    const columns = get.columns(keys);

    const values = Object.values(entry);
    const tableValues = get.values(values);

    insertInto.ratings(columns, tableValues);
  }
}

const recommendations = function(recommendationsData) {
  for (const entry of recommendationsData) {
    const keys = Object.keys(entry);
    const columns = get.columns(keys);

    const values = Object.values(entry);
    const tableValues = get.values(values);

    insertInto.recommendations(columns, tableValues);
  }
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