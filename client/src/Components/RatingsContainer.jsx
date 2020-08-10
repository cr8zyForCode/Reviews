import React from 'react';
import styles from '../Styles/RatingsContainer.css';
import RatingsBar from './RatingsBar.jsx'


const RatingsContainer = (props) => {
  //change each div to correspoding rating type
  return (
    <div className={styles.ratingsContainer}>
      <div className={styles.ratings}>
        Cleanliness
        <RatingsBar />
      </div>
      <div className={styles.ratings}>
        Accuracy
        <RatingsBar />
      </div>
      <div className={styles.ratings}>
        Communication
        <RatingsBar />
      </div>
      <div className={styles.ratings}>
        Location
        <RatingsBar />
      </div>
      <div className={styles.ratings}>
        Check-in
        <RatingsBar />
      </div>
      <div className={styles.ratings}>
        Value
        <RatingsBar />
      </div>
    </div>
  );
}

export default RatingsContainer;