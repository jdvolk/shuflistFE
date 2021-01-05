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
// import CommentBox from '../CommentBox/CommentBox';
// import Emoji from '../Emoji/Emoji';
import { addPosts, createPost } from '../../../features/User/userPostsSlice';
import { resetSearch } from '../../../features/SongSearch/songInputSlice';

// import renderPostSong from './renderPostSong';

function PostSong() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { song } = location;
  // const songDetails = song.song;
  // const [userInput, setSongInput] = useState('');
  const [userSumbitted, setUserSubmitted] = useState(false);
  const User = useSelector((state) => state.user);
  const UserName = User.userInfo.User_Name;
  const UserId = User.userInfo.User_Id;
  // const [validation, setValidation] = useState(false);
  const addBody = (input) => {
    return {
      Song: {
        Song_ID: song.Song_ID,
        Artist: song.Artist,
        Song_Name: song.Song_Name,
        Album_Cover: song.Album_Cover,
        isFavorite: song.isFavorite,
      },
      Body: input,
      Author: { Author: UserName, Author_Id: UserId },
      Comments: [],
    };
  };
  const handlePostClick = async (input) => {
    const payload = addBody(input);
    // console.log('payload', payload);
    // song.body = userInput;
    dispatch(addPosts(payload));
    await createPost(payload);
    dispatch(resetSearch());
    setUserSubmitted(true);
    // setValidation(true);
  };

  // const songDetails = song.song;
  return (
    // TODO Extract this render logic to seperate file
    <section className="post-form">
      <Song
        Song={song}
        handlePostClick={handlePostClick}
      />

      <section className="song-search-container">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        {userSumbitted && <Redirect to="/" push exact /> }
      </section>
    </section>
  );
}

export default withRouter(PostSong);
