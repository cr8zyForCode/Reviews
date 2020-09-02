-- DROP KEYSPACE sdc;

-- CREATE KEYSPACE sdc WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 3};
USE sdc;

-- DROP TABLE if exists houses;
-- DROP TABLE if exists users;
-- DROP TABLE if exists reviews;
-- DROP TABLE if exists comment_by_review;

---> GET/POST Request

-- CREATE TABLE houses(
--   houseId int,
--   houseName varchar,
--   PRIMARY KEY(houseId)
-- );


CREATE TABLE reviews(
  reviewId int,
  userId int,
  houseId int,
  review text,
  userName text,
  userUrl text,
  commentId int,
  cleanRating int,
  accRating int,
  commRating int,
  locationRating int,
  checkInRating int,
  valueRating int,
  dateReviewed text,
  comment text,
  PRIMARY KEY (houseId, reviewId)
  -- // AND CLUSTERING ORDER BY (dateReviewed DSC) ;
);



-- CREATE TABLE users(
--   userId int,
--   userName text,
--   userUrl text,
--   PRIMARY KEY (userId)
-- );

-- CREATE TABLE reviews_by_house (
--   reviewId int,
--   userId int,
--   review text,
--   houseId int,
--   dateReviewed text
--   cleanRating int,
--   accRating int,
--   commRating int,
--   locationRating int,
--   checkInRating int,
--   valueRating int,
--   PRIMARY KEY (houseId, userId)
--   -- // AND CLUSTERING ORDER BY (dateReviewed DSC) ;
-- );

-- CREATE TABLE comment_by_review (
--   commentId int,
--   reviewId int,
--   comment text,
--   PRIMARY KEY (commentId)
-- );








