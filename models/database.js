require('dotenv').config();

const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.MYSQL_CONNECTION_URI,
    database: process.env.MYSQL_CONNECTION_DB,
    user: process.env.MYSQL_CONNECTION_USER,
    password: process.env.MYSQL_CONNECTION_PASSWORD
});


module.exports = pool.promise();





