import React from 'react';
import styles from '../Styles/RatingsBar.css';

const RatingsBar = (props) => {
  // get each specific rating type and their avg and display them here

  return (
    <div className={styles.ratings}>
      <div className={styles.row}>
        <div className={styles.middle}>
          <div className={styles.barBackground}>
            <div className={styles.ratingBar}>
            </div>
          </div>
        </div>
        <span className={styles.ratingNumber}>
          {props.rating}
        </span>
      </div>
    </div>
  );
}

export default RatingsBar;

