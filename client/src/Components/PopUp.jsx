import React from 'react';
import styles from '../Styles/PopUp.css';
import ModalStars from './ModalStars.jsx';
import ModalRatingsContainer from './ModalRatingsContainer.jsx';
import ModalReviews from './ModalReviews.jsx';

const PopUp = (props) => {

  return (
    <div className={styles.modal}>
      <button className={styles.button} onClick={props.closePopUp}>
        X
      </button>
      <ModalStars
        reviews={props.reviews}
        currentHouse={props.currentHouse}
      />

      <ModalRatingsContainer
        reviews={props.reviews}
        currentHouse={props.currentHouse}
      />

      <ModalReviews
        users={props.users}
        reviews={props.reviews}
        currentHouse={props.currentHouse}
      />
    </div>
  );
}

export default PopUp;