import React from 'react';
import styles from '../Styles/Stars.css';

function Stars(props) {
  // get the avg of stars from all the total ratings
  return (
    <div className={styles.starComp}>
      <img className={styles.star} src="https://7528bnbimages.s3-us-west-1.amazonaws.com/bnbstar.png"/>
      <span className={styles.reviewText}>4.92 (255 reviews)</span>
    </div>
  );
}

export default Stars;