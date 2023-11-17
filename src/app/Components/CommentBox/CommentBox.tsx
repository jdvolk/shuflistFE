/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import cn from 'classnames';
// eslint-disable-next-line import/no-named-as-default
// app imports
import {
  postComment,
  addComment,
  Comment,
} from '../../Store/User/userPostsSlice';
import { UserHeader } from '../UserHeader/UserHeader';

// custom hooks
import { useDynamicHeightField } from './useDynamicHeightField';
// UI
import './CommentBox.css';
import { RootState, useAppDispatch } from '../../Store/store';

const INITIAL_HEIGHT = 40;

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/how-to-build-an-expandable-comment-box
 */
export const CommentBox = (props: any) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const user = useSelector((state: RootState) => state.user.userInfo);
  const [isExpanded, setIsExpanded] = useState(false);
  const [commentValue, setCommentValue] = useState('');

  const outerHeight = useRef(INITIAL_HEIGHT);
  const textRef = useRef<HTMLTextAreaElement>(null);
  const containerRef = useRef<HTMLFormElement>(null);
  useDynamicHeightField(textRef, commentValue);

  const onExpand = () => {
    if (!isExpanded && containerRef.current) {
      outerHeight.current = containerRef.current.scrollHeight - 35;
      setIsExpanded(true);
    }
  };

  const onChange = (e: any) => {
    setCommentValue(e.target.value);
  };

  const onClose = () => {
    setCommentValue('');
    setIsExpanded(false);
  };

  const handleCommentSubmit = (e: any) => {
    e.preventDefault();
    const commentData: Comment = {
      Comment_ID: Math.floor(Math.random()),
      Author: {
        AuthorHandle: user.UserName,
        Author_ID: Number(user.User_Id),
      },
      Body: commentValue,
      Post_ID: props.Post.Post_ID,
    };
    return commentData;
  };

  const onSubmit = (e: any) => {
    // e.stopPropagation();
    e.preventDefault();
    if (location.pathname === '/PostSong') {
      props.handlePostClick(commentValue);
    }
    if (location.pathname === '/') {
      // eslint-disable-next-line no-debugger
      const commentData = handleCommentSubmit(e);
      dispatch(addComment(commentData));
      postComment(commentData);
    }
  };

  return (
    <div className="container">
      <form
        onSubmit={(e) => onSubmit(e)}
        ref={containerRef}
        className={cn('comment-box', {
          expanded: isExpanded,
          collapsed: !isExpanded,
          modified: commentValue.length > 0,
        })}
        style={{
          minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT,
        }}
      >
        <div className="header">
          <div className="user">
            {/* <img
              src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
              alt="User avatar"
              draggable="false"
            />
            <span>
              {user.User_Name}
            </span> */}
            <UserHeader userName={user.UserName} />
          </div>
        </div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label
          // name="comment"
          htmlFor="comment"
        >
          What are your thoughts?
        </label>
        <textarea
          ref={textRef}
          onClick={onExpand}
          onFocus={onExpand}
          onChange={onChange}
          className="comment-field"
          placeholder="What are your thoughts?"
          value={commentValue}
          name="comment"
          // id="comment"
        />
        <div className="actions">
          <button
            name="comment"
            type="button"
            className="cancel"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="comment"
            type="button"
            disabled={commentValue.length < 1}
            onClick={(e) => onSubmit(e)}
          >
            {location.pathname === '/' && 'Respond'}
            {location.pathname === '/PostSong' && 'Post'}
          </button>
        </div>
      </form>
    </div>
  );
};
