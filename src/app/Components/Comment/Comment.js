/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React from 'react';
import UserHeader from '../UserHeader/UserHeader';

function Comment(props) {
  // eslint-disable-next-line react/prop-types
  if (props) {
    return (
      <section className="comment">
        <UserHeader />
        <section className="comment-body">
          <p>{props.Author} </p>
          <p> - {props.Body}</p>
        </section>
      </section>
    );
  }
}

export default Comment;
