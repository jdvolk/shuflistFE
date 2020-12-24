/* eslint-disable arrow-body-style */
import React from 'react';

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
const renderPosts = (props, songDetails, handleFavClick) => {
  return (
    <section>
      <section
        className={`song ${songDetails.isFavorite}`}
        label="check"
        onClick={handleFavClick}
      />
      <p>
        { props.Post.Author.Author }
        -
        { props.Post.Body }
      </p>
    </section>
  );
};

export default renderPosts;
