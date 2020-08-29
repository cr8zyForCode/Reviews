/* eslint-disable no-console */
const mysql = require("mysql");
const host = "localhost"; // 172.17.0.2

const connection = mysql.createConnection({
  host: host,
  user: "root",
  password: "",
  database: "FEC",
});

connection.connect((err) => {
  if (err) {
    console.log("err");
  } else {
    console.log(`Mysql is running on ${host}`);
  }
});

module.exports = connection;
