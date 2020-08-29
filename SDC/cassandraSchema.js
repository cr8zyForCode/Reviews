CREATE KEYSPACE houses WITH replication =
  {‘class’: ‘SimpleStrategy’, ‘replication_factor’ : 3};

---> GET/POST Request

CREATE TABLE houses.house (
  houseId SERIAL //NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
  houseName VARCHAR(300) //NOT NULL,
);
CREATE TABLE houses.users (
  userId: int, //UNIQUE, NOT NULL
  userName: text, //UNIQUE NOT NULL
  userUrl: text,
  dateReviewed: text, //NOT NULL
  // PRIMARY KEY ((houseId))

CREATE TABLE houses.reviews_by_house (
  reviewId int,
  userId int,
  houseId: int, //UNIQUE NOT NULL
  review: text, //NOT NULL
  cleanRating: int,
  accRating: int,
  commRating: int,
  locationRating: int,
  checkInRating: int,
  valueRating: int,
  comment: text //NOT NULL
  // PRIMARY KEY ((houseId, userId))
  // AND CLUSTERING ORDER BY (dateReviewed DSC) ;

CREATE TABLE houses.comment_by_review (
  commentId int,
  reviewId int,
  comment text
  // PRIMARY KEY ((commentId))
  )








