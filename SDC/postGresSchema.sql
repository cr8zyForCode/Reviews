
DROP DATABASE IF EXISTS SDC;
CREATE DATABASE SDC;
USE SDC;


CREATE TABLE [IF NOT EXISTS] houses (
  houseId SERIAL NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
  houseName VARCHAR(300) NOT NULL,
);


CREATE TABLE [IF NOT EXISTS] users (
  userId SERIAL NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
  userName VARCHAR(255) NOT NULL,
  userUrl VARCHAR(255),
  dateReviewed VARCHAR(255),
);

CREATE TABLE [IF NOT EXISTS] reviews (
  reviewId SERIAL NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  review TEXT NOT NULL,
  houseId INT NOT NULL,
  cleanRating INT(2),
  accRating INT(2),
  commRating INT(2),
  locationRating INT(2),
  checkInRating INT(2),
  valueRating INT(2),
  -- // FOREIGN KEY (houseId) REFERENCES houses(houseId),
  -- // FOREIGN KEY (userId) REFERENCES users(userId),
);


CREATE TABLE comments (
  commentId SERIAL NOT NULL UNIQUE AUTO_INCREMENT PRIMARY KEY,
  reviewsId INT NOT NULL,
  comment VARCHAR(255), NOT NULL
  -- // FOREIGN KEY (reviewsId) REFERENCES reviews(reviewsId),
);


-- ---
-- Seed
-- ---

-- COPY houses(houseId,houseName)
-- FROM '/Users/erfan/Desktop/JunBootcamp/SDC/reviews-section/SDC/houses.csv' DELIMITER ',' CSV HEADER;

-- COPY Trips(id,name,description,duration,numtotal_booked)
-- FROM '/Users/karen8/Documents/GitHub/localspots-travelers-server/db_postgres/trips.csv' DELIMITER ',' CSV HEADER;
-- COPY Prices(id,id_Trips,trip_date,trip_availability,price,fee_cancel)
-- FROM '/Users/karen8/Documents/GitHub/localspots-travelers-server/db_postgres/prices.csv' DELIMITER ',' CSV HEADER;
-- COPY Trip(id,num_adult,num_child,id_account,id_Prices,created_at,updated_at)
-- FROM '/Users/karen8/Documents/GitHub/localspots-travelers-server/db_postgres/trip.csv' DELIMITER ',' CSV HEADER;

