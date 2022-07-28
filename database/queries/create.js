const pool = require('../db.js');

const example = async function() {
  const creationQuery = "CREATE TABLE IF NOT EXISTS example (\
    name TEXT NOT NULL,\
    years TEXT NOT NULL,\
    language TEXT NOT NULL\
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
    page int NOT NULL,\
    count int NOT NULL\
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
    rating int NOT NULL,\
    summary TEXT NOT NULL,\
    recommend boolean NOT NULL,\
    response TEXT NOT NULL,\
    body TEXT NOT NULL,\
    date TEXT NOT NULL,\
    reviewer_name TEXT NOT NULL,\
    helpfulness int NOT NULL,\
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
    onestar int NOT NULL,\
    twostar int NOT NULL,\
    threestar int NOT NULL,\
    fourstar int NOT NULL,\
    fivestar int NOT NULL\
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
    recommended int NOT NULL,\
    notrecommended int NOT NULL\
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
    ratings_id int NOT NULL REFERENCES ratings(id),\
    characteristics_id int NOT NULL REFERENCES characteristics(id)\
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

const allTables = async function() {
  await example();
  await reviewsInfoTable();
  await photosTable();
  await reviewTable();
  await ratingsTable();
  await recommendationsTable();
  await characteristicsTable();
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