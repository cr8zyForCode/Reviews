import React from 'react';
import RatingsBar from './RatingsBar.jsx'

const RatingsContainer = (props) => {
  //change each div to correspoding rating type
  return (
    <div className="ratings-container">
      <div className="ratings">
        Cleanliness
        <RatingsBar />
      </div>
      <div className="ratings">
        Accuracy
        <RatingsBar />
      </div>
      <div className="ratings">
        Communication
        <RatingsBar />
      </div>
      <div className="ratings">
        Location
        <RatingsBar />
      </div>
      <div className="ratings">
        Check-in
        <RatingsBar />
      </div>
      <div className="ratings">
        Value
        <RatingsBar/>
      </div>
    </div>
  );
}

export default RatingsContainer;