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


module.exports = {
  getUsers
}