const { Pool, Client } = require('pg');

const credentials = {
  user: "root",
  host: "54.86.172.205",
  database: "sdc",
  password: "",
  port: 5432,
};


const pool = new Pool(credentials);
module.exports = pool;

