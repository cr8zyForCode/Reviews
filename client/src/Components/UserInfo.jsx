import React from 'react';
const faker = require("faker");

function UserInfo(props) {
  // replace img, username, userReviewDate and review with proper values
  return (
    <div className="user">
      <img
        className="user-url"
        src="https://7528userurl.s3-us-west-1.amazonaws.com/userImage110.jpg"
      />
      <span>
        <span className="user-name"> Ashley </span>
        <br />
        <span className="user-date"> January 1 2020 </span>
      </span>
      <p className="user-review">{faker.lorem.paragraph()}</p>
    </div>
  );
}

export default UserInfo;