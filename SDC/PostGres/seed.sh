psql -U me -d sdc -a -f postGresSchema.sql

psql -U me -d sdc -c  "COPY houses(houseId, houseName) FROM '/Users/erfan/Desktop/JunBootcamp/SDC/reviews-section/SDC/PostGres/houses.csv' DELIMITER ',' CSV HEADER;"

psql -U me -d sdc -c  "COPY users(userId, userName, userUrl) FROM '/Users/erfan/Desktop/JunBootcamp/SDC/reviews-section/SDC/PostGres/users.csv' DELIMITER ',' CSV HEADER"

psql -U me -d sdc -c "COPY reviews(reviewId, userId, review, houseId, dateReviwed, cleanRating, accRating, commRating, locationRating, checkInRating, valueRating) FROM '/Users/erfan/Desktop/JunBootcamp/SDC/reviews-section/SDC/PostGres/reviews2.csv' DELIMITER ',' CSV HEADER"

psql -U me -d sdc -c "COPY comments(commentId, reviewId, comment) FROM '/Users/erfan/Desktop/JunBootcamp/SDC/reviews-section/SDC/PostGres/comments.csv' DELIMITER ',' CSV HEADER"