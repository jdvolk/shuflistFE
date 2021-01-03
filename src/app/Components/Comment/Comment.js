/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React from 'react';

function Comment(props) {
  // eslint-disable-next-line react/prop-types
  if (props) {
    return (
      <section>
        <p>{props.Author}</p>
        <p>{props.Body}</p>
      </section>
    );
  }
}

export default Comment;
