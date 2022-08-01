const pool = require('../db.js');
const get = require('../helpers/get.js');


const ratings = async function (rating, product_id) {
  const columnToUpdate = get.columnFromRating(rating);
  const updateQuery = "UPDATE ratings SET " + columnToUpdate + " = " + columnToUpdate + " + 1 WHERE product_id='" + product_id + "'";

  pool.query(updateQuery, (error, result) => {
    if (error) console.log(error);
  });
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