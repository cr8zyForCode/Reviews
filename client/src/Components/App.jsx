import React from 'react';
import Stars from './Stars.jsx';
import RatingsContainer from './RatingsContainer.jsx';
import Reviews from './Reviews.jsx';

const App = () => {


  let [users, getUsers] = React.useState([]);
  let [house, getHouses] = React.useState([]);
  let [reviews, getReviews] = React.useState([]);
  let [comments, getComments] = React.useState([]);


  return (
    <div className="reviews-section">
      <hr />
        <Stars />
        <RatingsContainer />
        <Reviews />
        <button className="show-button">Show all 255 reviews</button>
      <hr />
    </div>
  )
};

export default App;
