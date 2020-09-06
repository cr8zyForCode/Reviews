const db = require('./index.js');


const getUsers = (callback) =>{
  let searchQuery = 'SELECT * FROM users';
  db.query(searchQuery, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

const getHouses = (callback) => {
  let searchQuery = "SELECT * FROM houses";
  db.query(searchQuery, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

const getReviews = (callback) => {
  let searchQuery = "SELECT * FROM reviews";
  db.query(searchQuery, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

const getComments = (callback) => {
  let searchQuery = "SELECT * FROM comments";
  db.query(searchQuery, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};


/*------------------------------------------------------------*/
/*                    SDC PROJECT                             */
/*------------------------------------------------------------*/


const getAll = (result, callback) => {
  let searchQuery = `SELECT h.id as house, r.*, u.*, c.* FROM houses h, users u, reviews r, comments c WHERE h.id = ${result} AND u.id = r.userId AND h.id = r.houseId and r.id = c.reviewsId`;
  db.query(searchQuery, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

const addComments = (result, callback) => {
  db.query(`INSERT into comments (reviewsId, comment) values (${result.reviewsId} , "${result.comment}")`, (err, results, fields) => {
    if(err) {
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
}

const updateComments = (request, callback) => {
  console.log("result", request)
  db.query(`UPDATE comments SET comment= "${request.comment}" WHERE reviewsId = ${request.reviewsId}` , (err, results, fields) => {
    if(err) {
      callback(err)
    } else {
      callback(null, results)
    }
  })
}


module.exports = {
  getUsers, getHouses, getReviews, getComments, addComments, deleteComments, updateComments, getAll
}