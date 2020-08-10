import React from 'react';
import styles from '../Styles/UserInfo.css';
const faker = require("faker");

const UserInfo = (props) => {
  // replace img, username, userReviewDate and review with proper values
  return (
    <div className={styles.user}>
      <img
        className={styles.userUrl}
        src="https://7528userurl.s3-us-west-1.amazonaws.com/userImage110.jpg"
      />
      <span>
        <span className={styles.userName}> Ashley </span>
        <br />
        <span className={styles.userDate}> January 1 2020 </span>
      </span>
      <p className={styles.userReview}>{faker.lorem.paragraph()}</p>
    </div>
  );
}

export default UserInfo;