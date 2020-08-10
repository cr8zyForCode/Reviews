import React from 'react';
import styles from '../Styles/App.css';
import Stars from './Stars.jsx';
import RatingsContainer from './RatingsContainer.jsx';
import Reviews from './Reviews.jsx';

const App = () => {


  let [users, getUsers] = React.useState([]);
  let [house, getHouses] = React.useState([]);
  let [reviews, getReviews] = React.useState([]);
  let [comments, getComments] = React.useState([]);


  return (
    // pass props to designated components
    <div className={styles.reviewSection}>
      <hr className={styles.hor} />
      <Stars />
      <RatingsContainer />
      <Reviews />
      <button className={styles.showButton}>Show all 255 reviews</button>
      <hr className={styles.hor} />
    </div>
  );
};

export default App;
