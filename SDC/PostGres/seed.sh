# **************************GENERATE DATA**************************
numOfhouseFiles=10;
numOfUserFiles=1;
numOfReviewFiles=30;
numOfcommentFiles=15;

for ((i = 0 ; i < ${numOfhouseFiles} ; i++)); do
  echo "Houses File: $i"
  node postGresSeed.js $i "writeTenMillionHouses"
done

for ((i = 0 ; i < ${numOfUserFiles} ; i++)); do
  echo "Users File: $i"
  node postGresSeed.js $i "writeOneMillionUsers"
done

for ((i = 0 ; i < ${numOfReviewFiles} ; i++)); do
  echo "Reviews File: $i"
  node postGresSeed.js $i "write150MillionReviews"
done

for ((i = 0 ; i < ${numOfcommentFiles} ; i++)); do
  echo "Comments File: $i"
  node postGresSeed.js $i "writeFifteenMillionComments"
done


psql -U me -d sdc -a -f postGresSchema.sql

# ****** HOW TO IMPORT FILES INTO TABLES CQLSH ******

for ((i = 0 ; i < ${numOfhouseFiles} ; i++)); do
  psql -U me -d sdc -c "COPY houses(houseId, houseName) FROM '/Users/erfan/Desktop/JunBootcamp/SDC/reviews-section/SDC/PostGres/houses$i.csv' DELIMITER ',' CSV HEADER;"
done

for ((i = 0 ; i < ${numOfUserFiles} ; i++)); do
  psql -U me -d sdc -c "COPY users(userId, userName, userUrl) FROM '/Users/erfan/Desktop/JunBootcamp/SDC/reviews-section/SDC/PostGres/users$i.csv' DELIMITER ',' CSV HEADER"
done

for ((i = 0 ; i < ${numOfReviewFiles} ; i++)); do
  psql -U me -d sdc -c "COPY reviews(reviewId, userId, review, houseId, dateReviwed, cleanRating, accRating, commRating, locationRating, checkInRating, valueRating) FROM '/Users/erfan/Desktop/JunBootcamp/SDC/reviews-section/SDC/PostGres/reviews${i}.csv' DELIMITER ',' CSV HEADER"
done

for ((i = 0 ; i < ${numOfcommentFiles} ; i++)); do
  psql -U me -d sdc -c "COPY comments(commentId, reviewId, comment) FROM '/Users/erfan/Desktop/JunBootcamp/SDC/reviews-section/SDC/PostGres/comments$i.csv' DELIMITER ',' CSV HEADER"
done