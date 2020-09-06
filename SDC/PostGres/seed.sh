psql -U me -d sdc -a -f postGresSchema.sql

psql -U me -d sdc -c  "COPY houses(houseId, houseName) FROM '/Users/erfan/Desktop/JunBootcamp/SDC/reviews-section/SDC/PostGres/houses2.csv' DELIMITER ',' CSV HEADER;"

psql -U me -d sdc -c  "COPY users(userId, userName, userUrl) FROM '/Users/erfan/Desktop/JunBootcamp/SDC/reviews-section/SDC/PostGres/users2.csv' DELIMITER ',' CSV HEADER"

psql -U me -d sdc -c "COPY reviews(reviewId, userId, review, houseId, dateReviwed, cleanRating, accRating, commRating, locationRating, checkInRating, valueRating) FROM '/Users/erfan/Desktop/JunBootcamp/SDC/reviews-section/SDC/PostGres/reviews3.csv' DELIMITER ',' CSV HEADER"

psql -U me -d sdc -c "COPY comments(commentId, reviewId, comment) FROM '/Users/erfan/Desktop/JunBootcamp/SDC/reviews-section/SDC/PostGres/comments2.csv' DELIMITER ',' CSV HEADER"