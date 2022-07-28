const pool = require('../db.js');

const example = async function() {
  const creationQuery = "CREATE TABLE IF NOT EXISTS example (\
    name TEXT,\
    years TEXT,\
    language TEXT\
    )";

  const changeOwnerQuery = "ALTER TABLE example OWNER TO root";

  pool.query(creationQuery, (error, result) => {
    if (error) console.log(error);
    else {
      console.log(result);
      pool.query(changeOwnerQuery, (error, result) => {
        if (error) console.log(error);
        else console.log(result);
      })
    }
  })
}

const reviewsInfoTable = async function() {
  const creationQuery = "CREATE TABLE IF NOT EXISTS reviewsinfo (\
    Product TEXT NOT NULL PRIMARY KEY,\
    page int,\
    count int\
    )";

  const changeOwnerQuery = "ALTER TABLE reviewsinfo OWNER TO root";

  pool.query(creationQuery, (error, result) => {
    if (error) console.log(error);
    else {
      console.log(result);
      pool.query(changeOwnerQuery, (error, result) => {
        if (error) console.log(error);
        else console.log(result);
      })
    }
  })
}

const photosTable = async function() {
  const creationQuery = "CREATE TABLE IF NOT EXISTS photos (\
    id int NOT NULL PRIMARY KEY,\
    review_id int,\
    url TEXT\
    )";

  const changeOwnerQuery = "ALTER TABLE photos OWNER TO root";

  pool.query(creationQuery, (error, result) => {
    if (error) console.log(error);
    else {
      console.log(result);
      pool.query(changeOwnerQuery, (error, result) => {
        if (error) console.log(error);
        else console.log(result);
      })
    }
  })
}

const reviewTable = async function() {
  const creationQuery = "CREATE TABLE IF NOT EXISTS review (\
    review_id int NOT NULL PRIMARY KEY,\
    rating int,\
    summary TEXT,\
    recommend boolean,\
    response TEXT,\
    body TEXT,\
    date TEXT,\
    reviewer_name TEXT,\
    helpfulness int,\
    photo_id int NOT NULL REFERENCES photos(id)\
    )";

  const changeOwnerQuery = "ALTER TABLE review OWNER TO root";

  pool.query(creationQuery, (error, result) => {
    if (error) console.log(error);
    else {
      console.log(result);
      pool.query(changeOwnerQuery, (error, result) => {
        if (error) console.log(error);
        else console.log(result);
      })
    }
  })
}

const ratingsTable = async function() {
  const creationQuery = "CREATE TABLE IF NOT EXISTS ratings (\
    id SERIAL PRIMARY KEY,\
    onestar int,\
    twostar int,\
    threestar int,\
    fourstar int,\
    fivestar int\
    )";

  const changeOwnerQuery = "ALTER TABLE ratings OWNER TO root";

  pool.query(creationQuery, (error, result) => {
    if (error) console.log(error);
    else {
      console.log(result);
      pool.query(changeOwnerQuery, (error, result) => {
        if (error) console.log(error);
        else console.log(result);
      })
    }
  })
}

const recommendationsTable = async function() {
  const creationQuery = "CREATE TABLE IF NOT EXISTS recommendations (\
    id SERIAL PRIMARY KEY,\
    recommended int,\
    notrecommended int\
    )";

  const changeOwnerQuery = "ALTER TABLE recommendations OWNER TO root";

  pool.query(creationQuery, (error, result) => {
    if (error) console.log(error);
    else {
      console.log(result);
      pool.query(changeOwnerQuery, (error, result) => {
        if (error) console.log(error);
        else console.log(result);
      })
    }
  })
}

const characteristicsTable = async function() {
  const creationQuery = "CREATE TABLE IF NOT EXISTS characteristics (\
    id int NOT NULL PRIMARY KEY,\
    product_id int NOT NULL,\
    name TEXT NOT NULL\
    )";

    const changeOwnerQuery = "ALTER TABLE characteristics OWNER TO root";

    pool.query(creationQuery, (error, result) => {
      if (error) console.log(error);
      else {
        console.log(result);
        pool.query(changeOwnerQuery, (error, result) => {
          if (error) console.log(error);
          else console.log(result);
        })
      }
    })
}

const metaTable = async function() {
  const creationQuery = "CREATE TABLE IF NOT EXISTS meta (\
    product_id TEXT NOT NULL PRIMARY KEY,\
    ratings_id int REFERENCES ratings(id),\
    characteristics_id int REFERENCES characteristics(id)\
    )";

  const changeOwnerQuery = "ALTER TABLE meta OWNER TO root";

  pool.query(creationQuery, (error, result) => {
    if (error) console.log(error);
    else {
      console.log(result);
      pool.query(changeOwnerQuery, (error, result) => {
        if (error) console.log(error);
        else console.log(result);
      })
    }
  })
}

const characteristicReviewsTable = async function() {
  const creationQuery = "CREATE TABLE IF NOT EXISTS characteristicreviews (\
    id int NOT NULL PRIMARY KEY,\
    characteristics_id int REFERENCES characteristics(id),\
    review_id int REFERENCES review(review_id),\
    value int\
    )";

  const changeOwnerQuery = "ALTER TABLE characteristicreviews OWNER TO root";

  pool.query(creationQuery, (error, result) => {
    if (error) console.log(error);
    else {
      console.log(result);
      pool.query(changeOwnerQuery, (error, result) => {
        if (error) console.log(error);
        else console.log(result);
      })
    }
  })
}

const allTables = async function() {
  await example();
  await reviewsInfoTable();
  await photosTable();
  await reviewTable();
  await ratingsTable();
  await recommendationsTable();
  await characteristicsTable();
  await metaTable();
  await characteristicReviewsTable();
}

module.exports = {
  example,
  reviewsInfoTable,
  metaTable,
  reviewTable,
  photosTable,
  ratingsTable,
  recommendationsTable,
  characteristicsTable,
  allTables
}

allTables();
// recommendationsTable();
// example();