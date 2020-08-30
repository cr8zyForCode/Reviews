cqlsh -u 'erfan' -p '32655' -f 'cassandraSchema.cql' 127.0.0.1

cqlsh -e "COPY sdc.houses(houseId,houseName) FROM '/Users/erfan/Desktop/JunBootcamp/SDC/reviews-section/SDC/houses.csv' WITH HEADER = TRUE;"

cqlsh -e "COPY sdc.users(userId,userName,userUrl,dateReviewed) FROM '/Users/erfan/Desktop/JunBootcamp/SDC/reviews-section/SDC/users.csv' WITH HEADER = TRUE;"

cqlsh -e "COPY sdc.reviews_by_house(reviewId,userId,review,houseId,cleanRating,accRating,commRating,locationRating,checkInRating,valueRating) FROM '/Users/erfan/Desktop/JunBootcamp/SDC/reviews-section/SDC/reviews.csv' WITH HEADER = TRUE;"

cqlsh -e "COPY sdc.comment_by_review(commentId, reviewId, comment) FROM '/Users/erfan/Desktop/JunBootcamp/SDC/reviews-section/SDC/comments.csv' WITH HEADER = TRUE;"

# Get data from bucket at a3. Do not do this if your Cassandra is running in your local machine. -->

# curl 'https://sdc-erfan.s3-us-west-1.amazonaws.com/users.csv' | cqlsh 127.0.0.1 -u 'erfan' -p '32655' -k sdc -e "copy users from stdin with header = true;"




