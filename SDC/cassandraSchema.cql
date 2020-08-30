DROP KEYSPACE sdc;

CREATE KEYSPACE sdc WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 3};
USE sdc;


DROP TABLE if exists houses;
DROP TABLE if exists users;

---> GET/POST Request

CREATE TABLE houses(
  houseId int PRIMARY KEY,
  houseName varchar
);
CREATE TABLE users(
  userId int PRIMARY KEY,
  userName text,
  userUrl text,
  dateReviewed text
  -- // PRIMARY KEY ((houseId))
);
CREATE TABLE reviews_by_house (
  reviewId int,
  userId int,
  review text,
  houseId int,
  cleanRating int,
  accRating int,
  commRating int,
  locationRating int,
  checkInRating int,
  valueRating int,
  PRIMARY KEY (houseId, userId)
  -- // AND CLUSTERING ORDER BY (dateReviewed DSC) ;
);

CREATE TABLE comment_by_review (
  commentId int,
  reviewId int,
  comment text,
  PRIMARY KEY (commentId)
);








