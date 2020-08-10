import React from 'react';
import UserInfo from './UserInfo.jsx';

class Reviews extends React.Component {

  // map trhough 6 data entries
  render() {
    return (
      <div className="reviews">
        <UserInfo />
        <UserInfo />
        <UserInfo />
        <UserInfo />
        <UserInfo />
        <UserInfo />
      </div>
    );
  }
}

export default Reviews;