const pool = require('../db.js');
const get = require('../helpers/get.js');
const insertInto = require('./insertInto.js');
const select = require('./select.js');


const ratings = async function (rating, product_id) {
  const columnToUpdate = get.columnFromRating(rating);
  const updateQuery = "UPDATE ratings SET " + columnToUpdate + " = " + columnToUpdate + " + 1 WHERE product_id='" + product_id + "'";

  pool.query(updateQuery, (error, result) => {
    if (error) console.log(error);
  });
}

const photos = async function(urls, review_id) {
  const columns = '(id, review_id, url)';
  select.maxId('photos', (error, max) => {
    if (!error) {
      let newId = max + 1;

      for (const url of urls) {
        let values = get.values([newId, review_id, url]);
        insertInto.photos(columns, values);
        newId++;
      }
    }
  })
}

const reviews = async function(dataValues, urls, callback) {
  const columns = '(review_id, product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness)';

  select.maxId('review', (error, max) => {
    const newId = max + 1;
    dataValues[0] = newId;

    const values = get.values(dataValues);

    photos(urls, newId);

    insertInto.review(columns, values, (error, result) => {
      if (error) {
        console.log(error);
        callback(error, result);
      }
      else callback(null, result);
    });
  });
}

const helpfulness = async function(review_id, callback) {
  const updateQuery = 'UPDATE review SET helpfulness = helpfulness + 1 WHERE review_id=' + review_id;

  pool.query(updateQuery, (error, result) => {
    if (error) {
      console.log(error);
      callback(error, result);
    } else {
      callback(null, result);
    }
  })
}

const reported = async function(review_id, callback) {
  const updateQuery = 'UPDATE review SET reported = true WHERE review_id=' + review_id;

  pool.query(updateQuery, (error, result) => {
    if (error) {
      console.log(error);
      callback(error, result);
    } else {
      callback(null, result);
    }
  })
}

const recommendations = async function (recommended, product_id) {
  const columnToUpdate = recommended ? 'recommended' : 'notrecommended';
  const updateQuery = "UPDATE ratings SET " + columnToUpdate + " = " + columnToUpdate + " + 1 WHERE product_id='" + product_id + "'";

  pool.query(updateQuery, (error, result) => {
    if (error) console.log(error);
  });
}

module.exports = {
  helpfulness,
  reported,
  reviews,
  photos,
  ratings,
  recommendations
}


// const ratings = async function(rating, product_id) {
//   const selectionQuery = "SELECT * FROM ratings WEHRE product_id='" + product_id + "'";

//   pool.query(selectionQuery, (error, result) => {
//     if (error) console.log(error);
//     else {
//       const numberOfResults = result.rows.length;

//       if (numberOfResults === 0) {
//         const columns = '(product_id, onestar, twostar, threestar, fourstar, fivestar)';
//         const values = get.values([product_id, 0, 0, 0, 0, 0]);

//         insertInto.ratings(columns, values);
//       } else {
//         const columnToUpdate = get.columnFromRating(rating);
//         const updateQuery = "UPDATE ratings SET " + columnToUpdate + " = " + columnToUpdate + " + 1 WHERE product_id='" + product_id + "'";

//         pool.query(updateQuery, (error, result) => {
//           if (error) console.log(error);
//         })
//       }
//     }
//   })
// }