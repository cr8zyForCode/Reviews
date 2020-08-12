import React from 'react';
import styles from '../Styles/UserInfo.css';
const faker = require("faker");

const UserInfo = (props) => {

  return (
    <div className={styles.user}>
      <img
        className={styles.userUrl}
        src={props.user.userUrl}
        onClick={() => {alert(`Hi my name is ${props.user.userName}`)}}
      />
      <span>
        <span className={styles.userName}> {props.user.userName} </span>
        <br />
        <span className={styles.userDate}> {props.user.dateReviewed} </span>
      </span>
      <p className={styles.userReview}>{props.review.review}</p>
    </div>
  );
}

export default UserInfo;