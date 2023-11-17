/* eslint-disable arrow-body-style */
import React from 'react';
import { CommentBox } from '../../CommentBox/CommentBox';
import { UserHeader } from '../../UserHeader/UserHeader';
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
export const renderPosts = (
  props: any,
  songDetails: any,
  handleFavClick: any
) => {
  return (
    <section className="song-post">
      <section
        className={`song favorite ${songDetails.isFavorite}`}
        // label="check"
        onClick={handleFavClick}
      />
      <section className="poster-info">
        <div className="post-header">
          <div className="user">
            <UserHeader user={props.author} />
            {/* <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User avatar" draggable="false" /> */}
            <span>{props.Post.Author && props.Post.Author.Author}</span>
          </div>
        </div>
        <p>{props.Post.Body}</p>
      </section>
      <section className="post-comment-box">
        <CommentBox location="timeline" Post={props.Post} />
      </section>
    </section>
  );
};
