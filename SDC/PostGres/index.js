const { Pool, Client } = require('pg');
const host = 'localhost';

const pool = new Pool({
  user: 'me',
  host: host,
  database: 'sdc',
  password: '32655',
  port: 5432,
})

pool.connect((err) => {
  if (err) {
    console.log("err");
  } else {
    console.log(`Postgres is running on ${host}`);
  }
})

module.exports = pool;

// pool.query("DROP DATABASE if exists sdc",(err, res) => {
//   if(err) {
//     console.log(err,res)
//   }
//   console.log('succees', res)
//   // pool.end()
// });

// pool.query("CREATE DATABASE SDC",(err, res) => {
//   if(err) {
//     console.log(err,res)
//   }
//   console.log('succees', res)
//   // pool.end()
// });

// pool.query("CREATE TABLE houses (houseId INT, houseName VARCHAR(50))" ,(err, res) => {
//   if(err) {
//     console.log(err,res)
//   }
//   console.log('succees', res)
//   // pool.end()
// });


// pool.query("CREATE TABLE if not exists users (userId INT, userName VARCHAR(10), userUrl VARCHAR(200), dateReviewed VARCHAR(40))" ,(err, res) => {
//   if(err) {
//     console.log(err,res)
//   }
//   console.log('succees', res)
//   // pool.end()
// });

// pool.query("CREATE TABLE if not exists reviewss (reviewId INT, userId INT, review VARCHAR(200), houseId INT, cleanRating INT(2), accRating INT(2), CommRating INT(2), locationRating INT(2), checkInRating INT(2), valueRating INT(2)" ,(err, res) => {
//   if(err) {
//     console.log(err,res)
//   }
//   console.log('succees', res)
//   // pool.end()
// });


// pool.query("CREATE TABLE if not exists comments (commentId INT, reviewId INT, comment VARCHAR(200))" ,(err, res) => {
//   if(err) {
//     console.log(err,res)
//   }
//   console.log('succees', res)
//   pool.end()
// });

// /*---seeding ---*/

// pool.query("COPY houses(houseId, houseName) FROM '/Users/erfan/Desktop/JunBootcamp/SDC/reviews-section/SDC/houses.csv' DELIMITER ',' CSV HEADER", (err, res) => {
//   if(err) {
//     console.log(err,res)
//   }
//   console.log('added', res)
//   // pool.end()
// });

// pool.query("COPY users(userId, userName, userUrl, dateReviewed) FROM '/Users/erfan/Desktop/JunBootcamp/SDC/reviews-section/SDC/users.csv' DELIMITER ',' CSV HEADER", (err, res) => {
//   if(err) {
//     console.log(err,res)
//   }
//   console.log('added', res)
//   // pool.end()
// });

// pool.query("COPY users(reviewId, userId, review, houseId, cleanRating, accRating, CommRating, locationRating, checkInRating, valueRating) FROM '/Users/erfan/Desktop/JunBootcamp/SDC/reviews-section/SDC/reviews.csv' DELIMITER ',' CSV HEADER", (err, res) => {
//   if(err) {
//     console.log(err,res)
//   }
//   console.log('added', res)
//   // pool.end()
// });

// pool.query("COPY users(commentId, reviewId, comment) FROM '/Users/erfan/Desktop/JunBootcamp/SDC/reviews-section/SDC/comments.csv' DELIMITER ',' CSV HEADER", (err, res) => {
//   if(err) {
//     console.log(err,res)
//   }
//   console.log('added', res)
//   // pool.end()
// });