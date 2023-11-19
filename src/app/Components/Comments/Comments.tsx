/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import cn from 'classnames';

// app imports
import { Comment } from '../Comment/Comment';
import { Comment as CommentType } from '../../Store/storetypes';

// UI
import { Button, ButtonType } from '../Button/Button';
import './Comments.css';

interface CommentsProps {
  comments: CommentType[];
}

export const Comments = ({ comments }: CommentsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onExpand = () => {
    if (!isExpanded && comments.length > 0) {
      setIsExpanded(true);
    }
  };

  const onClose = () => {
    setIsExpanded(false);
  };

  const filteredComments = comments.filter(
    (comment: CommentType) => comment.Body !== ''
  );
  const mapComments = filteredComments.map((comment: CommentType) => {
    return (
      <section key={comment.Comment_ID + Math.random()}>
        <Comment author={comment.Author.AuthorHandle} body={comment.Body} />
      </section>
    );
  });

  const renderButton = () => {
    return (
      <section
        // name="comment-close"
        onClick={onClose}
      >
        {!isExpanded && mapComments.length > 0 && (
          <Button
            className="comment open"
            label={`comments(${mapComments.length})`}
          />
        )}
        {!isExpanded && mapComments.length === 0 && (
          <Button
            className="comment open disabled"
            label="no comments"
            disabled={comments.length === 0}
          />
        )}
        {isExpanded && mapComments}
        {isExpanded && (
          <Button className="comment" type={ButtonType.BUTTON} label="close" />
        )}
      </section>
    );
  };

  return (
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
};
