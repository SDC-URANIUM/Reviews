const express = require('express');
const path = require('path');

const select = require('../database/queries/select.js');
const insertInto = require('../database/queries/insertInto.js');
const update = require('../database/queries/update.js');
const get = require('../database/helpers/get.js');

const app = express();

app.use(express.json());

app.get('/reviews', (req, res) => {
  console.log('entering reviews endpoint');

  const productId = req.query.product_id;
  // console.log(req.query);
  const page = req.query.page;
  const count = req.query.count;

  const response = {};

  response.product = productId;
  response.page = page;
  response.count = count;

  select.reviewsByProductId(productId, (error, reviews) => {
    if (error) {
      res.sendStatus(404);
    } else {
      response.results = reviews;
      res.status(200).send(response);
    }
  });
});

app.get('/reviews/meta', (req, res) => {
  console.log('entering meta endpoint');
});

app.post('/reviews', (req, res) => {
  console.log('entering post reviews endpoint');

  const data = req.body;
  const columns = '(review_id, product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness)';
  const values = get.values([19999999, data.product_id, data.rating, new Date(), data.summary, data.body, data.recommend, false, data.name, data.email, null, 0]);

  insertInto.review(columns, values);
  update.ratings(data.rating, data.product_id);
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