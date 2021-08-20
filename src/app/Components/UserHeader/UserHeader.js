/* eslint-disable react/prop-types */
import React from 'react';

function UserHeader(props) {
  const { userName } = props;
  return (
    <div className="user">
      <img
        src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
        alt="User avatar"
        draggable="false"
      />
      <span>
        {userName}
      </span>
    </div>
  );
}

export default UserHeader;