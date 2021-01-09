/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import cn from 'classnames';
import Comment from '../Comment/Comment';
import './Comments.css';

function Comments(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const onExpand = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  const onClose = () => {
    setIsExpanded(false);
  };

  let comments = props.Comments;
  if (props.Comments.length >= 1) {
    comments = comments.map((comment) => {
      return (
        <section
          key={comment.Comment_ID + Math.random()}
        >
          <Comment
            Author={comment.Author.Author}
            Body={comment.Body}
          />

        </section>
      );
    });
  } else {
    return [];
  }

  const renderButton = () => {
    return (
      // eslint-disable-next-line jsx-a11y/control-has-associated-label
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <section
        name="comment-close"
        onClick={onClose}
      >
        {!isExpanded && `comments(${comments.length})`}
        {isExpanded && comments}
        {isExpanded && <button className="comment" type="button">close</button>}
      </section>
    );
  };

  return (
    // <section>{props.Comments.length > 0 && comments}</section>
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <section
      className={cn('comments', {
        expanded: isExpanded,
        collapsed: !isExpanded,
      })}
      onClick={onExpand}
      onFocus={onExpand}
    >
      {/* {`comments(${comments.length})`}
      {comments.isExpanded && comments} */}
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      {comments && renderButton()}
    </section>
  );
}

export default Comments;
