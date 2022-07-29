const express = require('express');
const path = require('path');

const select = require('../database/queries/select.js');
const insertInto = require('../database/queries/insertInto.js');

const app = express();

app.use(express.json());

app.get('/reviews', (req, res) => {
  console.log('entering reviews endpoint');

  const productId = req.body.product_id;

  const response = {};
  const callback = function(reviews) { response.results = reviews };
  select.reviewsByProductId(productId, callback);
});

app.get('/reviews/meta', (req, res) => {
  console.log('entering meta endpoint');
});

app.post('/reviews', (req, res) => {
  console.log('entering post reviews endpoint');
});

app.put('/reviews/:review_id/helpful', (req, res) => {
  console.log('entering helpful endpoint');
});

app.put('/reviews/:review_id/report', (req, res) => {
  console.log('entering report endpoint');
});

const PORT = 3000;

app.listen(PORT);
console.log('Server listening at http://localhost:3000');