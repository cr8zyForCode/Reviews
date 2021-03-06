import React from "react";
import styles from "../Styles/UserInfo.css";

const UserInfo = (props) => {
  let [displayReadMore, setReadMore] = React.useState(false);
  let [remainingReviews, setRemainingReviews] = React.useState("");

  const handleMoreButton = (review) => {
    setRemainingReviews(review);
    setReadMore(!displayReadMore);
  };

  return (
    <div className={styles.user}>
      <img
        className={styles.userUrl}
        src={props.user.userUrl}
        onClick={() => {
          alert(`Hi my name is ${props.user.userName}`);
        }}
      />
      <span className={styles.users}>
        <span className={styles.userName}> {props.user.userName} </span>
        <br />
        <span className={styles.userDate}> {props.user.dateReviewed} </span>
      </span>

      {props.review.review.length < 150 ? (
        <p className={styles.userReview}>{props.review.review}</p>
      ) : (
        <div className={styles.userReview}>
          {props.review.review.slice(0, 150)}
          {displayReadMore ? null : (
            <React.Fragment>
              <span>...</span>
              <button
                className={styles.readMore}
                onClick={() => handleMoreButton(props.review.review.slice(150))}
              >
                read more
              </button>
            </React.Fragment>
          )}
          <span>{remainingReviews}</span>
        </div>
      )}
    </div>
  );
};

export default UserInfo;