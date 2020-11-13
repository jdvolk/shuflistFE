/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './PostSong.css';
import { Redirect, useLocation, withRouter } from 'react-router-dom';
import Song from '../Song/Song';
import Emoji from '../Emoji/Emoji';
import { addPosts } from '../../../features/User/userPostsSlice';
import { resetSearch } from '../../../features/SongSearch/songInputSlice';

function PostSong() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { song } = location;
  const [userInput, setSongInput] = useState('');
  const [userSumbitted, setUserSubmitted] = useState(false);
  // const [validation, setValidation] = useState(false);
  const addBody = (input) => {
    return { ...song, newField: input };
  };
  const handlePostClick = () => {
    addBody(userInput);
    // song.body = userInput;
    dispatch(addPosts(song));
    dispatch(resetSearch());
    setUserSubmitted(true);
    // setValidation(true);
  };

  // const songDetails = song.song;
  return (
    <section className="post-form">
      <Song
        song={song}
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <section className="song-search-container">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            <input
              type="text"
              value={userInput || ''}
              onChange={(e) => setSongInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  console.log('make post request');
                  handlePostClick();
                }
              }}
            />
          </label>
          <section
            className="post-click"
            onClick={() => {
              console.log('make post request');
              handlePostClick();
            }}
          >
            <Emoji
              label="send-post"
            />
          </section>
          {userSumbitted && <Redirect to="/" push exact /> }
        </section>
      </form>
    </section>
  );
}

export default withRouter(PostSong);
