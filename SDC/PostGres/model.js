const db = require('./index.js');


const getAll = (result, callback) => {
  let searchQuery = `SELECT h.*, r.*, u.* FROM houses h, reviews r, users u WHERE h.houseId = ${result} AND h.houseId = r.houseId AND u.userId = r.userId`;

  db.query(searchQuery, (err, data) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      // console.log("hello hello", data)
      callback(null, data);
    }
  });
};

// const getComments = (result, callback) => {
//   let searchQuery = "SELECT * FROM comments WHERE ";
//   db.query(searchQuery, (err, data) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(null, data);
//     }
//   });
// };


const addComments = (result, id, callback) => {
  console.log(id)
  console.log(result.review)
  db.query(`INSERT into reviews (reviewId, userId, review, houseId) values (${result.reviewId} , ${result.userId}, '${result.review}', ${id})`, (err, results, fields) => {
    if(err) {
      console.log(err)
      callback(err)
    } else {
      callback(null, results)
    }
  })
};

const deleteComments = (request, callback) => {
  db.query("DELETE from comments WHERE reviewsId = ?" , `${request.reviewsId}`, (err, results, fields) => {
    if(err) {
      callback(err)
    } else {
      callback(null, results)
    }
  })
};

const updateComments = (request, callback) => {
  console.log("result", request)
  db.query(`UPDATE comments SET comment= "${request.comment}" WHERE reviewsId = ${request.reviewsId}` , (err, results, fields) => {
    if(err) {
      callback(err)
    } else {
      callback(null, results)
    }
  })
};

module.exports = {
  getAll, addComments, deleteComments, updateComments
}