const Pool = require("pg").Pool;

const pool = new Pool({
  user: "cyf",
  password: "cyf123",
  host: "localhost",
  database: "faq_database",
  port: 5432,
});

module.exports = pool;
