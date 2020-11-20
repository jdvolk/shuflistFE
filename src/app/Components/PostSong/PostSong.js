/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const songDetails = song.song;
  const [userInput, setSongInput] = useState('');
  const [userSumbitted, setUserSubmitted] = useState(false);
  const User = useSelector((state) => state.user);
  const UserName = User.userInfo.userName;
  const UserId = User.userInfo.userId;
  // const [validation, setValidation] = useState(false);
  const addBody = (input) => {
    return {
      id: song.id,
      song: {
        Artist: songDetails.Artist,
        Song_Name: songDetails.Song_Name,
        Album_Cover: songDetails.Album_Cover,
        isFavorite: songDetails.isFavorite,
      },
      body: input,
      Author: { Author: UserName, Author_Id: UserId },
    };
  };
  const handlePostClick = () => {
    const payload = addBody(userInput);
    // console.log('payload', payload);
    // song.body = userInput;
    dispatch(addPosts(payload));
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
}

export default withRouter(PostSong);
