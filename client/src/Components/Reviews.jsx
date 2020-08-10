import React from 'react';
import styles from '../Styles/Reviews.css';
import UserInfo from './UserInfo.jsx';

class Reviews extends React.Component {

  // map trhough 6 data entries
  render() {
    return (
      <div className={styles.reviews}>
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