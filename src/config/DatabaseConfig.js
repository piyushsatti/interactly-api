require('dotenv').config();
const Pool = require('pg').Pool;

const pool = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    port: process.env.PORT,
    database: process.env.DATABASE
})

module.exports = pool;