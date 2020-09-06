const fs = require('fs');
const v8 = require('v8');
const faker = require('faker');

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

const writeHouses = fs.createWriteStream('houses2.csv');
writeHouses.write('houseId,houseName\n', 'utf8');

function writeTenMillionHouses(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    let data = "";
    do {
      i -= 1;
      id += 1;
      const houseId = id;
      const houseName = faker.address.streetName();
      data += `${houseId},${houseName}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else if (id % 5000 === 0) {
      // see if we should continue, or wait
      // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
        data = "";
      }
    } while (i > 0 && ok);
    if (i > 0) {
    // had to stop early!
    // write some more once it drains
      writer.once('drain', write);
    }
  }
write()
}

writeTenMillionHouses(writeHouses, 'utf-8', () => {
  writeHouses.end();
});



const writeUsers = fs.createWriteStream('users2.csv');
writeUsers.write('userId,userName,userUrl\n', 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 1000000;
  let id = 0;
  function write() {
    let data = "";
    let ok = true;
    do {
      i -= 1;
      const users = Array.from(Array(100), (_, i) => i + 1);
      let url = `https://7528userurl.s3-us-west-1.amazonaws.com/userImage${users[id%100]}.jpg`;
      id += 1;
      let name = faker.name.firstName();
      data += `${id},${name},${url}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else if ( id % 5000 === 0) {
        ok = writer.write(data, encoding);
        data = "";
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
write()
}

writeTenMillionUsers(writeUsers, 'utf-8', () => {
  writeUsers.end();
});



const writeReviews = fs.createWriteStream('reviews3.csv');
writeReviews.write('reviewId,userId,review,housId,dateReviwed,cleanRating,accRating,commRating,locationRating,checkInRating,valueRating\n', 'utf8');

function writeTenMillionReviews(writer, encoding, callback) {
  let i = 50000000;
  let id = 100000001;
  function write() {0
    let ok = true;
    const numUsers = 10;
    let data = "";
    do {
      i -= 1;
      let userId = faker.random.number({min:1, max:1000000})
      let houseId = faker.random.number({min:1, max:10000000})
      id += 1;
      let review = faker.lorem.sentence();
      const year = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
      const month = [0,1,2,3,4,5,6,7,8,9,10,11];
      let rateNum = [5,1,3,4,2]
      let dates = `${months[month[id%12]]} ${year[id%10]}`
      data += `${id},${userId},${review},${houseId},${dates},${rateNum[userId%5]},${rateNum[userId*3%5]},${rateNum[houseId%5]},${rateNum[userId*3%5]},${rateNum[id*3%5]},${rateNum[id%5]}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else if (id % 500000 === 0) {
        ok = writer.write(data, encoding);
        data = "";
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
write()
}

writeTenMillionReviews(writeReviews, 'utf-8', () => {
  writeReviews.end();
});


const writeComments = fs.createWriteStream('comments2.csv');
writeComments.write('commentId,reviewId,comment\n', 'utf8');

function writeTenMillionComments(writer, encoding, callback) {
  let i = 15000000;
  let id = 0;
  function write() {
    let ok = true;
    data = "";
    do {
      i -= 1;
      id += 1;
      let review_id = faker.random.number({min:1, max:150000000})
      let comment = faker.lorem.sentence();
      data += `${id},${review_id},${comment}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else if (id % 5000 === 0) {
        ok = writer.write(data, encoding);
        data = "";
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
write()
}

writeTenMillionComments(writeComments, 'utf-8', () => {
  writeComments.end();
});
