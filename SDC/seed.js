const fs = require('fs');
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


const seedHouses = (number) => {
  let dataString = 'houseId, houseName \n'
  for (let i = 1; i <= number; i++) {
    let houseName = faker.address.streetName();
    dataString += `${i},`;
    dataString += ` ${houseName} \n`;

  }
  return new Promise((resolve, reject) => {
    fs.writeFile('houses.csv', dataString, (err, data) => {
      if(err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
};

seedHouses(10)
  .then(() => {console.log('success')})
  .catch(() => {console.log('whoopsie you messd up')})



const seedUsers = (number) => {
  const users = [1 ,15 ,20 ,25 ,30 ,35, 40, 50, 60, 70];
  const year = [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
  const month = [1,2,3,4,5,6,7,8,9,10,11,12];

  let dataString = 'userId, userName, userUrl, dateReviewd \n'
  for (let i = 1; i <= number; i++) {
    let url = `https://7528userurl.s3-us-west-1.amazonaws.com/userImage${users[i%10]}.jpg`;
    let name = faker.name.firstName();
    let dates = `${months[month[i%12]]} ${year[i%10]}`
    dataString += ` ${i},`;
    dataString += ` ${name},`;
    dataString += ` ${url},`;
    dataString += ` ${dates} \n`;
  }

  return new Promise((resolve, reject) => {
    fs.writeFile('users.csv', dataString, (err, data) => {
      if(err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
};

seedUsers(10)
  .then(() => {console.log('success')})
  .catch(() => {console.log('whoopsie you messd up')})



const seedReviews = (number) => {

  let rateNumber = [1,2,3,4,5]
  let dataString = 'reviewID, userId, review, housId, cleanRating, accRating, commRating, locationRating, checkInRating, valueRating \n'
  for (let i = 1; i <= number; i++) {
    let review = faker.lorem.sentences();
    dataString += `${i},`;
    dataString += ` ${i},`;
    dataString += ` ${review}, `;
    dataString += ` ${i},`;
    dataString += ` ${i%5},`;
    dataString += ` ${i%5},`;
    dataString += ` ${i%5},`;
    dataString += ` ${i%5},`;
    dataString += ` ${i%5},`;
    dataString += ` ${i%5} \n`;
  }

  return new Promise((resolve, reject) => {
    fs.writeFile('reviews.csv', dataString, (err, data) => {
      if(err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
};

seedReviews(10)
  .then(() => {console.log('success')})
  .catch(() => {console.log('whoopsie you messd up')})



  const seedComments = (number) => {
    let dataString = 'commentId, reviewId, comment \n'
    for (let i = 1; i <= number; i++) {
      let comment = faker.lorem.sentence();
      dataString += `${i}, `;
      dataString += ` ${i},`;
      dataString += ` ${comment} \n`;
    }
    return new Promise((resolve, reject) => {
      fs.writeFile('comments.csv', dataString, (err, data) => {
        if(err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
  };

  seedComments(10)
    .then(() => {console.log('success')})
    .catch(() => {console.log('whoopsie you messd up')})

