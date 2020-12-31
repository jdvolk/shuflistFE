/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React from 'react';
import Comment from '../Comment/Comment';

function Comments(props) {
  let comments = props.Comments;
  if (props.Comments.length >= 1) {
    comments = comments.map((comment) => {
      return (
        <section
          key={comment.Comment_ID}
        >
          <Comment
            Author={comment.Author.Author}
            Body={comment.Body}
          />

        </section>
      );
    });
  }
  return (
    <section>{props.Comments.length && comments}</section>
  );
}

export default Comments;
