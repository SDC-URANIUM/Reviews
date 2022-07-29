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
    id int NOT NULL PRIMARY KEY,\
    product_id int NOT NULL,\
    rating int,\
    date TEXT,\
    summary TEXT,\
    body TEXT,\
    recommend boolean,\
    reported boolean,\
    reviewer_name TEXT,\
    reviewer_email TEXT,\
    response TEXT,\
    helpfulness int\
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
    product_id TEXT NOT NULL PRIMARY KEY,\
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
    product_id TEXT NOT NULL PRIMARY KEY,\
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
    ratings_id TEXT REFERENCES ratings(product_id),\
    recommendations_id TEXT REFERENCES recommendations(product_id),\
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
    review_id int REFERENCES review(id),\
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
  await recommendationsTable();
  await metaTable();
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