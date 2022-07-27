const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');

function readExampleCSV(callback) {
  let exampleData = [];
  fs.createReadStream(path.join(__dirname, 'data/example.csv'))
      .pipe(csv.parse({ headers: true }))
      .on('error', (error) => console.log(error))
      .on('data', (data) => exampleData.push(data))
      .on('end', (rowCount) => {
        console.log('number of rows', rowCount);
        callback(exampleData);
      });
}

function characteristicReviewsDataFromCSV(callback) {
  let characteristicReviewsData = [];
  fs.createReadStream(path.join(__dirname, 'data/characteristic_reviews.csv'))
      .pipe(csv.parse({ headers: true }))
      .on('error', (error) => console.log(error))
      .on('data', (data) => characteristicReviewsData.push(data))
      .on('end', (rowCount) => {
        console.log('number of rows', rowCount);
        callback(characteristicReviewsData);
      });

}

function characteristicDataFromCSV(callback) {
  let characteristicsData = [];
  fs.createReadStream(path.join(__dirname, 'data/characteristics.csv'))
      .pipe(csv.parse({ headers: true }))
      .on('error', (error) => console.log(error))
      .on('data', (data) => characteristicsData.push(data))
      .on('end', (rowCount) => {
        console.log('number of rows', rowCount);
        callback(characteristicsData);
      });
}

function reviewsPhotosDataFromCSV(callback) {
  let reviewsPhotosData = [];
  fs.createReadStream(path.join(__dirname, 'data/reviews_photos.csv'))
      .pipe(csv.parse({ headers: true }))
      .on('error', (error) => console.log(error))
      .on('data', (data) => reviewsPhotosData.push(data))
      .on('end', (rowCount) => {
        console.log('number of rows', rowCount);
        callback(reviewsPhotosData);
      });
}

function reviewsDataFromCSV(callback) {
  let reviewsData = [];
  fs.createReadStream(path.join(__dirname, 'data/reviews.csv'))
      .pipe(csv.parse({ headers: true }))
      .on('error', (error) => console.log(error))
      .on('data', (data) => reviewsData.push(data))
      .on('end', (rowCount) => {
        console.log('number of rows', rowCount);
        callback(reviewsData);
      });
}

module.exports = {
  reviewsDataFromCSV,
  reviewsPhotosDataFromCSV,
  characteristicDataFromCSV,
  characteristicReviewsDataFromCSV,
  readExampleCSV
};
