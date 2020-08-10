import React from 'react';

function Stars(props) {
  // get the avg of stars from all the total ratings
  return (
    <div className="star-comp">
      <img className="star" src="https://7528bnbimages.s3-us-west-1.amazonaws.com/bnbstar.png"/>
      <span className="review-text">4.92 (255 reviews)</span>
    </div>
  );
}

export default Stars;