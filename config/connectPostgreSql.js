const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: process.env.PWD,
  database: "learn-postgres",
  host: "localhost",
  port: 5432,
});

module.exports = pool;
