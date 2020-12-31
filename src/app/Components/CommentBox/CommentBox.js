/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import useDynamicHeightField from './useDynamicHeightField';
import './CommentBox.css';

const INITIAL_HEIGHT = 46;

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/how-to-build-an-expandable-comment-box
 */
function CommentBox(props) {
  const location = useLocation();
  const user = useSelector((state) => state.user.userInfo);
  const [isExpanded, setIsExpanded] = useState(false);
  const [commentValue, setCommentValue] = useState('');

  const outerHeight = useRef(INITIAL_HEIGHT);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  useDynamicHeightField(textRef, commentValue);

  const onExpand = () => {
    if (!isExpanded) {
      outerHeight.current = containerRef.current.scrollHeight;
      setIsExpanded(true);
    }
  };

  const onChange = (e) => {
    setCommentValue(e.target.value);
  };

  const onClose = () => {
    setCommentValue('');
    setIsExpanded(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (location.pathname === '/PostSong') {
      props.handlePostClick(commentValue);
    }
    if (location.pathname === '/') {
      console.log('send the form data somewhere');
    }
  };

  return (
    <div className="container">
      <form
        onSubmit={onSubmit}
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
            <img
              src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
              alt="User avatar"
            />
            <span>
              {user.User_Name}
            </span>
          </div>
        </div>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label id="comment" htmlFor="comment">What are your thoughts?</label>
        <textarea
          ref={textRef}
          onClick={onExpand}
          onFocus={onExpand}
          onChange={onChange}
          className="comment-field"
          placeholder="What are your thoughts?"
          value={commentValue}
          name="comment"
          id="comment"
        />
        <div className="actions">
          <button id="comment" type="button" className="cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="comment" type="submit" disabled={commentValue.length < 1}>
            {location.pathname === '/' && 'Respond'}
            {location.pathname === '/PostSong' && 'Post'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommentBox;
