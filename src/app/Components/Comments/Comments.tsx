/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import cn from 'classnames';

// app imports
import { Comment } from '../Comment/Comment';
import { Comment as CommentType, Post } from '../../Store/storetypes';

// UI
import { Button, ButtonType } from '../Button/Button';
import './Comments.css';
import { CommentBox } from '../CommentBox/CommentBox';
import { CommentIcon } from '../Icons/index';

interface CommentsProps {
  comments: CommentType[];
  post: Post;
}

export const Comments = ({ comments, post }: CommentsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onExpand = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  const onClose = () => {
    setIsExpanded(false);
  };
  const handleClick = () => {
    setIsExpanded(!isExpanded);
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
  const label = () => {
    if (comments.length === 1) return `1 comment`;
    if (comments.length >= 2) return `${comments.length} comments`;
    return `add comment`;
  };
  const renderButton = () => {
    return (
      <section>
        {/* {!isExpanded && mapComments.length > 0 && (
          <Button
            className="comment open"
            label={`comments(${mapComments.length})`}
          />
        )} */}
        {/* {!isExpanded && mapComments.length > 0 && (
          // eslint-disable-next-line jsx-a11y/control-has-associated-label
          // <button
          //   className="comment open"
          //   // label={`comments(${mapComments.length})`}
          //   type="button"
          // ></button>
        )} */}
        {/* <CommentIcon isActive={isExpanded} /> */}

        {/* {!isExpanded && mapComments.length === 0 && (
          <Button className="comment open" label="add comment" />
        )} */}
        {isExpanded && (
          <section className="post-comment-box">
            <CommentBox location="timeline" Post={post} />
          </section>
        )}
        {isExpanded && mapComments}
        {isExpanded && (
          <Button
            className="comment"
            type={ButtonType.BUTTON}
            label="close"
            onClick={onClose}
          />
        )}
      </section>
    );
  };

  return (
    <>
      <CommentIcon
        isActive={isExpanded}
        onClick={handleClick}
        label={label()}
        // onFocus={onExpand}
      />
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
    </>
  );
};
