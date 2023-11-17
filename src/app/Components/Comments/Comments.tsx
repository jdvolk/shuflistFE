/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import cn from 'classnames';

// app imports
import { Comment } from '../Comment/Comment';

// UI
import { Button } from '../Button/Button';
import './Comments.css';

export function Comments(props: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  let comments = props.Comments;

  const onExpand = () => {
    if (!isExpanded && comments.length > 0) {
      setIsExpanded(true);
    }
  };

  const onClose = () => {
    setIsExpanded(false);
  };

  if (props.Comments.length >= 1) {
    comments = comments.filter((comment: any) => comment.Body !== '');
    comments = comments.map((comment: any) => {
      return (
        <section key={comment.Comment_ID + Math.random()}>
          <Comment Author={comment.Author.Author} Body={comment.Body} />
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
        // name="comment-close"
        onClick={onClose}
      >
        {!isExpanded && comments.length > 0 && (
          <Button
            className="comment open"
            label={`comments(${comments.length})`}
          />
        )}
        {!isExpanded && comments.length === 0 && (
          <Button
            className="comment open disabled"
            label="no comments"
            disabled={comments.length === 0}
          />
        )}
        {isExpanded && comments}
        {isExpanded && (
          <Button className="comment" type="button" label="close" />
        )}
      </section>
    );
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <section
      className={cn('comments', {
        expanded: isExpanded,
        collapsed: !isExpanded,
      })}
      onClick={onExpand}
      onFocus={onExpand}
    >
      {renderButton()}
    </section>
  );
}