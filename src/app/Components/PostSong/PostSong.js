/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import './PostSong.css';
import { useLocation, withRouter } from 'react-router-dom';
import Song from '../Song/Song';
import Emoji from '../Emoji/Emoji';

function PostSong() {
  const location = useLocation();
  const { song } = location;
  const [userInput, setSongInput] = useState('');

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
                }
              }}
            />
          </label>
          <Emoji
            label="send-post"
          />
        </section>
      </form>
    </section>
  );
}

export default withRouter(PostSong);
