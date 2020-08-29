psql -U me -d sdc -a -f postGresSchema.sql

psql -U me -d sdc -c  "COPY houses(houseId, houseName) FROM '/Users/erfan/Desktop/JunBootcamp/SDC/reviews-section/SDC/houses.csv' DELIMITER ',' CSV HEADER;"

psql -U me -d sdc -c  "COPY users(userId, userName, userUrl, dateReviewed) FROM '/Users/erfan/Desktop/JunBootcamp/SDC/reviews-section/SDC/users.csv' DELIMITER ',' CSV HEADER"

psql -U me -d sdc -c "COPY reviews(reviewId, userId, review, houseId, cleanRating, accRating, commRating, locationRating, checkInRating, valueRating) FROM '/Users/erfan/Desktop/JunBootcamp/SDC/reviews-section/SDC/reviews.csv' DELIMITER ',' CSV HEADER"

psql -U me -d sdc -c "COPY comments(commentId, reviewsId, comment) FROM '/Users/erfan/Desktop/JunBootcamp/SDC/reviews-section/SDC/comments.csv' DELIMITER ',' CSV HEADER"