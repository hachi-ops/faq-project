const { Console } = require("console");

const Pool = require("pg").Pool;
require("dotenv").config();

const proConfig = {
  connectionString: process.env.DATABASE_URL, //heroku addons
  ssl: { rejectUnauthorized: false },
};

const devConfig = {
  connectionString: process.env.DATABASE_URL, //heroku addons
  // ssl: { rejectUnauthorized: false },
};

console.log(devConfig);
const pool = new Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig
);

module.exports = pool;
