const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "password",
    host: "localhost",
    database: "faq_database",
    port: 5432
});

module.exports = pool;