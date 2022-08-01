const pool = require('../db.js');
const get = require('../helpers/get.js');
const insertInto = require('./insertInto.js');
const select = require('./select.js');


const ratings = async function (rating, product_id) {
  const columnToUpdate = rating;
  // console.log("🚀 ~ file: update.js ~ line 9 ~ ratings ~ columnToUpdate", columnToUpdate)

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
    } else {
      console.log('ERROR IN PHOTOS', error);
    }
  })
}

const reviews = async function(dataValues, urls, characteristics, callback) {
  // console.log('getting into update reviews');
  const columns = '(review_id, product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness)';

  select.maxId('review', (error, max) => {
    if (error) console.log('error in getting max id from review', error);
    else {
      // console.log('max is', max);
      const newId = max + 1;
      dataValues[0] = newId;

      const values = get.values(dataValues);
      // console.log("🚀 ~ file: update.js ~ line 45 ~ select.maxId ~ values", values)

      photos(urls, newId);
      characteristicReviews(characteristics, dataValues[1], newId);
      characteristicsTable(characteristics, dataValues[1]);

      insertInto.review(columns, values, callback);
    }
  });
}

const helpfulness = async function(review_id, callback) {
  const updateQuery = 'UPDATE review SET helpfulness = helpfulness + 1 WHERE review_id=' + review_id;

  pool.query(updateQuery, (error, result) => {
    if (error) {
      console.log('ERROR IN UPDATING HELPFULNESS', error);
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
  const columnToUpdate = recommended ? '1' : '0';
  const updateQuery = "UPDATE recommendations SET " + columnToUpdate + " = " + columnToUpdate + " + 1 WHERE product_id='" + product_id + "'";

  pool.query(updateQuery, (error, result) => {
    if (error) console.log('ERROR IN RECOMMENDATIONS', error);
  });
}

const characteristicReviews = async function(characteristics, review_id, product_id) {
  for (const key in characteristics) {
    const currentCharacteristic = characteristics[key];

    const characteristic_id = currentCharacteristic.id;
    const value = currentCharacteristic.value;

    const values = get.values([product_id, characteristic_id, review_id, value]);
    insertInto.characteristicReviews(values);
  }
}

const characteristicsTable = async function(characteristics, product_id) {
  for (const key in characteristics) {
    const currentCharacteristic = characteristics[key];

    const characteristic_id = currentCharacteristic.id;
    const name = currentCharacteristic.name;

    const values = get.values([characteristic_id, product_id, name]);

    insertInto.characteristics(values);
  }
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