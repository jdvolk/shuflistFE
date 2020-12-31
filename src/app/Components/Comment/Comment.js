/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React from 'react';

function Comment(props) {
  // eslint-disable-next-line react/prop-types
  if (props) {
    return (
      <section>
        <p1>{props.Author}</p1>
        <p1>{props.Body}</p1>
      </section>
    );
  }
}

export default Comment;
