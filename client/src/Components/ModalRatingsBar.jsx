import React from "react";
import styles from "../Styles/ModalRatingsBar.css";

const ModalRatingsBar = (props) => {
  // get each specific rating type and their avg and display them here

  return (
    <div className={styles.ratings}>
      <div className={styles.middle}>
        <div className={styles.barBackground}>
          <div className={styles.ratingBar}></div>
        </div>
      </div>
      <span className={styles.ratingNumber}>{props.rating}</span>
    </div>
  );
};

export default ModalRatingsBar;
