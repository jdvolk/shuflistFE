/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import CommentBox from '../../CommentBox/CommentBox';

const renderPostSong = (handlePostClick) => {
  return (
    <CommentBox
      handlePostClick={handlePostClick}
    />
  );
};

export default renderPostSong;
