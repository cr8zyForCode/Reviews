/* eslint-disable no-console */
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'reborn7528',
  database: 'fec'
});

connection.connect((err) => {
  if (err) {
    console.log ('err');
  } else {
    console.log('Mysql is running on localhost');
  }
});

module.exports = connection;
