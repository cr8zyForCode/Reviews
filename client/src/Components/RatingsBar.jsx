import React from 'react';
import styles from '../Styles/RatingsBar.css';

const RatingsBar = (props) => {
  // get each specific rating type and their avg and display them here
  return (
    <span>
      <img className={styles.ratingsBar} src="https://7528bnbimages.s3-us-west-1.amazonaws.com/exampleRatingsBar.png"/>
    </span>
  );
}

export default RatingsBar;