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

// const writeHouses = fs.createWriteStream('houses.csv');
// writeHouses.write('houseId,houseName\n', 'utf8');

// function writeTenMillionHouses(writer, encoding, callback) {
//   let i = 10000000;
//   let id = 0;
//   function write() {
//     let ok = true;
//     let data = "";
//     do {
//       i -= 1;
//       id += 1;
//       const houseId = id;
//       const houseName = faker.address.streetName();
//       data += `${houseId},${houseName}\n`;
//       if (i === 0) {
//         writer.write(data, encoding, callback);
//       } else if (id % 50000 === 0) {
//       // see if we should continue, or wait
//       // don't pass the callback, because we're not done yet.
//         ok = writer.write(data, encoding);
//         data= "";
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



const writeReviews = fs.createWriteStream('reviews3.csv');
writeReviews.write('reviewId,userId,houseId,review,userName,userUrl,commentId,cleanRating,accRating,commRating,locationRating,checkInRating,valueRating,dateReviewed,comment\n', 'utf8');

function writeTenMillionReviews(writer, encoding, callback) {
  let i = 20000000;
  let id = 80000001;
  function write() {
    let ok = true;
    const year = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];

    const month = [0,1,2,3,4,5,6,7,8,9,10,11];
    let rateNum = [5,1,3,4,2];
    let userNames = {};
    let userImages = {};
    let data = "";
    do {
      i -= 1;
      let houseId = faker.random.number({min:1, max:10000000})
      let userId = faker.random.number({min:1, max:1000000})
      let commentId = faker.random.number({min:1, max:15000000})
      let dates = `${months[month[id%12]]} ${year[userId%10]}`;
      let review = faker.lorem.sentence();
      if(userNames[userId] === undefined) {
        userNames[userId] = faker.name.firstName();
      }
      if(userImages[userId] === undefined) {
        userImages[userId] =`https://7528userurl.s3-us-west-1.amazonaws.com/userImage${id%100}.jpg`;
      }

      id += 1;

      const user = userNames[userId];
      const url = userImages[userId]

      data += `${id},${userId},${houseId},${review},${user},${url},${commentId},${userId*2%5},${rateNum[userId*3%5]},${userId*3%5},${rateNum[userId%5]},${rateNum[userId%5]},${userId*4%5},${dates},${review} \n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else if (id % 500000 === 0){
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

writeTenMillionReviews(writeReviews, 'utf-8', () => {
  writeReviews.end();
});

