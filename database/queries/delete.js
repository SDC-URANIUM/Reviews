
const example = async function() {
  const deletionQuery = "DROP TABLE example";

  pool.query(deletionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const reviewsInfoTable = async function() {
  const deletionQuery = "DROP TABLE reviewsinfo";

  pool.query(deletionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const metaTable = async function() {
  const deletionQuery = "DROP TABLE meta";

  pool.query(deletionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const reviewTable = async function() {
  const deletionQuery = "DROP TABLE review";

  pool.query(deletionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const photosTable = async function() {
  const deletionQuery = "DROP TABLE photos";

  pool.query(deletionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const ratingsTable = async function() {
  const deletionQuery = "DROP TABLE ratings";

  pool.query(deletionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const recommendationsTable = async function() {
  const deletionQuery = "DROP TABLE recommendations";

  pool.query(deletionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

const characteristicsTable = async function() {
  const deletionQuery = "DROP TABLE characteristics";

  pool.query(deletionQuery, (error, result) => {
    if (error) console.log(error);
    else console.log(result);
  })
}

module.exports = {
  example,
  reviewsInfoTable,
  metaTable,
  reviewTable,
  photosTable,
  ratingsTable,
  recommendationsTable,
  characteristicsTable
}