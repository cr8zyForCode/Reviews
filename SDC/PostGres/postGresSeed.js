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


const fileIndex = parseInt(process.argv[2]);
const functionName = process.argv[3]


let table = functionName;

switch(functionName){
  case 'writeTenMillionHouses':
    houseSeeding();
  case 'writeOneMillionUsers':
    usersSeeding()
  case 'write150MillionReviews':
    reviewsSeeding()
  case 'writeFifteenMillionComments':
    commentsSeeding()
}


function houseSeeding() {
  const writeHouses = fs.createWriteStream(`houses${fileIndex}.csv`);
  writeHouses.write('houseId,houseName\n', 'utf8');

  function writeTenMillionHouses(writer, encoding, callback) {
    const housePerFile = 1000000;
    let i = housePerFile;
    let id = housePerFile*fileIndex;
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
        } else if (id % 50 === 0) {
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
}

function usersSeeding() {
  const writeUsers = fs.createWriteStream(`users${fileIndex}.csv`);
    writeUsers.write('userId,userName,userUrl\n', 'utf8');

    function writeOneMillionUsers(writer, encoding, callback) {
      const usersPerFile = 1000000;
      let i = usersPerFile;
      let id = usersPerFile*fileIndex;
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
          } else if ( id % 50 === 0) {
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

    writeOneMillionUsers(writeUsers, 'utf-8', () => {
      writeUsers.end();
    });
}


function reviewsSeeding () {
  const writeReviews = fs.createWriteStream(`reviews${fileIndex}.csv`);
  writeReviews.write('reviewId,userId,review,housId,dateReviwed,cleanRating,accRating,commRating,locationRating,checkInRating,valueRating\n', 'utf8');

  function write150MillionReviews(writer, encoding, callback) {
    const reviewsPerFile = 5000000;
    let i = reviewsPerFile;
    let id = reviewsPerFile*fileIndex;
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
        } else if (id % 1000 === 0) {
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

  write150MillionReviews(writeReviews, 'utf-8', () => {
    writeReviews.end();
  });
}


function commentsSeeding () {
  const writeComments = fs.createWriteStream(`comments${fileIndex}.csv`);
  writeComments.write('commentId,reviewId,comment\n', 'utf8');

  function writeFifteenMillionComments(writer, encoding, callback) {
    const commentsPerFile = 1000000;
    let i = commentsPerFile;
    let id = commentsPerFile*fileIndex;
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

  writeFifteenMillionComments(writeComments, 'utf-8', () => {
    writeComments.end();
  });

}

