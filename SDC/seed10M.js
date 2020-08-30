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

// const writeHouses = fs.createWriteStream('houses2.csv');
// writeHouses.write('houseId,houseName\n', 'utf8');

// function writeTenMillionHouses(writer, encoding, callback) {
//   let i = 10000000;
//   let id = 0;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       const houseId = id;
//       const houseName = faker.address.streetName();
//       const data = `${houseId},${houseName}\n`;
//       if (i === 0) {
//         writer.write(data, encoding, callback);
//       } else {
//       // see if we should continue, or wait
//       // don't pass the callback, because we're not done yet.
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//     // had to stop early!
//     // write some more once it drains
//       writer.once('drain', write);
//     }
//   }
// write()
// }

// writeTenMillionHouses(writeHouses, 'utf-8', () => {
//   writeHouses.end();
// });



const writeUsers = fs.createWriteStream('users.csv');
writeUsers.write('userId,userName,userUrl,dateReviwed\n', 'utf8');

function writeTenMillionUsers(writer, encoding, callback) {
  let i = 50000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const users = [1 ,15 ,20 ,25 ,30 ,35, 40, 50, 60, 70];
      const year = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
      const month = [1,2,3,4,5,6,7,8,9,10,11,12];
      let url = `https://7528userurl.s3-us-west-1.amazonaws.com/userImage${users[id]}.jpg`;
      let name = faker.name.firstName();
      let dates = `${months[month[id]]} ${year[id]}`
      const data = `${id},${name},${url},${dates}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
      // see if we should continue, or wait
      // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
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

writeTenMillionUsers(writeUsers, 'utf-8', () => {
  writeUsers.end();
});




// const writeReviews = fs.createWriteStream('reviews2.csv');
// writeReviews.write('reviewID,userId,review,housId,cleanRating,accRating,commRating,locationRating,checkInRating,valueRating\n', 'utf8');

// function writeTenMillionReviews(writer, encoding, callback) {
//   let i = 10;
//   let id = 0;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       let review = faker.lorem.sentences();
//       let rateNum = [5,1,3,4,2]
//       const data = `${id},${id},${review},${id},${id%5},${rateNum[id%5]},${id%5},${rateNum[id%5]},${rateNum[id%5]},${id%5}\n`;
//       if (i === 0) {
//         writer.write(data, encoding, callback);
//       } else {
//       // see if we should continue, or wait
//       // don't pass the callback, because we're not done yet.
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//     // had to stop early!
//     // write some more once it drains
//       writer.once('drain', write);
//     }
//   }
// write()
// }

// writeTenMillionReviews(writeReviews, 'utf-8', () => {
//   writeReviews.end();
// });


// const writeComments = fs.createWriteStream('comments2.csv');
// writeComments.write('commentId,reviewId,comment\n', 'utf8');

// function writeTenMillionComments(writer, encoding, callback) {
//   let i = 10;
//   let id = 0;
//   function write() {
//     let ok = true;
//     do {
//       i -= 1;
//       id += 1;
//       let comment = faker.lorem.sentence();
//       const data = `${id},${id},${comment}\n`;
//       if (i === 0) {
//         writer.write(data, encoding, callback);
//       } else {
//       // see if we should continue, or wait
//       // don't pass the callback, because we're not done yet.
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//     // had to stop early!
//     // write some more once it drains
//       writer.once('drain', write);
//     }
//   }
// write()
// }

// writeTenMillionComments(writeComments, 'utf-8', () => {
//   writeComments.end();
// });
