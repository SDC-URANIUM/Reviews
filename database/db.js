const { Pool, Client } = require('pg');

const credentials = {
  user: "anthonycella",
  host: "localhost",
  database: "postgres",
  password: "",
  port: 5432,
};


const pool = new Pool(credentials);
module.exports = pool;

