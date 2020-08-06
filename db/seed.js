const db = require('./index.js');
const faker = require('faker');


const rdm = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let houseName = faker.address.streetName();
let name = faker.name.findName();
let url = `https://7528userurl.s3-us-west-1.amazonaws.com/userImage${rdm(1, 110)}.jpg`;
let review = faker.lorem.sentences();
let dates = `${months[rdm(1, 12)]} ${rdm(2000, 2020)}`;
let rating = rdm(2, 5);
let comment = faker.lorem.sentence();

const seedHouses = () => {
  for (let i = 1; i <= 100; i ++) {
    let houseName = faker.address.streetName();
    let postQuery = `INSERT INTO houses(id, houseName) VALUES(${i}, "${houseName}")`;
    db.query(postQuery, (err, data) => {
      if (err) {
        console.log("Error");
      }
    })
  }
}

const seedUsers = () => {
  for (let i = 1; i <= 200; i ++) {
    let name = faker.name.findName();
    let url = `https://7528userurl.s3-us-west-1.amazonaws.com/userImage${rdm(1, 110)}.jpg`;
    let dates = `${months[rdm(1, 12)]} ${rdm(2000, 2020)}`;
    let postQuery = `INSERT INTO users(id, userName, userUrl, dateReviewed) VALUES(${i}, "${name}", "${url}", "${dates}")`;
    db.query(postQuery, (err, data) => {
      if (err) {
        console.log("error");
      }
    })
  }
}

const seedReviews = () => {
  for (let i = 0; i <= 3000; i ++) {
    let review = faker.lorem.sentences();
    let postQuery = `INSERT INTO reviews(userId, review, houseId, cleanRating, accRating, commRating, locationRating, checkInRating, valueRating) VALUES(${rdm(1, 200)}, "${review}", ${rdm(1, 100)}, ${rdm(3,5)}, ${rdm(3,5)}, ${rdm(3,5)}, ${rdm(3,5)}, ${rdm(3,5)}, ${rdm(3,5)})`;
    db.query(postQuery, (err, data) => {
      if (err) {
        console.log('error', err);
      }
    })
  }
}

const seedComments = () => {
  for (let i = 0; i <= 1000; i ++) {
    let comments = faker.lorem.sentence();
    let postQuery = `INSERT INTO comments(reviewsId, comment) VALUES(${rdm(1, 3000)}, "${comments}")`;
    db.query(postQuery, (err, data) => {
      if (err) {
        console.log('err', err);
      }
    })
  }
}

seedHouses();
seedUsers();
seedReviews();
seedComments();
db.end();



