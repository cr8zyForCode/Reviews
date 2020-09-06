
-- DROP DATABASE IF EXISTS SDC;
-- CREATE DATABASE SDC;
USE SDC;

DROP TABLE if exists houses;
DROP TABLE if exists users;
-- DROP TABLE if exists reviews;
DROP TABLE if exists comments;

CREATE TABLE if not exists houses (
  houseId SERIAL NOT NULL UNIQUE PRIMARY KEY,
  houseName VARCHAR(30) NOT NULL
);


CREATE TABLE if not exists users (
  userId SERIAL NOT NULL UNIQUE PRIMARY KEY,
  userName VARCHAR(50) NOT NULL,
  userUrl VARCHAR(255)
);

CREATE TABLE if not exists reviews (
  reviewId SERIAL NOT NULL UNIQUE PRIMARY KEY,
  userId INT NOT NULL,
  review VARCHAR(250) NOT NULL,
  houseId INT NOT NULL,
  dateReviwed VARCHAR(50),
  cleanRating INT,
  accRating INT,
  commRating INT,
  locationRating INT,
  checkInRating INT,
  valueRating INT
  -- // FOREIGN KEY (houseId) REFERENCES houses(houseId),
  -- // FOREIGN KEY (userId) REFERENCES users(userId),
);


CREATE TABLE if not exists comments (
  commentId SERIAL NOT NULL UNIQUE PRIMARY KEY,
  reviewId INT NOT NULL,
  comment VARCHAR(255) NOT NULL
  -- // FOREIGN KEY (reviewsId) REFERENCES reviews(reviewsId),
);


