/* eslint-disable consistent-return */
/* eslint-disable arrow-body-style */
import React from 'react';

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
const renderPostSong = (
  Song,
  song,
  Emoji,
  userInput,
  setSongInput,
  handlePostClick,
  userSumbitted,
  Redirect,
) => {
  return (
    <section className="post-form">
      <Song
        Song={song}
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
                  // console.log('make post request');
                  handlePostClick();
                }
              }}
            />
          </label>
          <section
            className="post-click"
            onClick={() => {
              // console.log('make post request');
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
};

export default renderPostSong;
