/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useLocation, useNavigate } from 'react-router-dom';

// app imports
import Song, { withRouter } from '../Song/Song';
import { addPosts, createPost } from '../../../features/User/userPostsSlice';
import { resetSearch } from '../../../features/SongSearch/songInputSlice';

// UI
import './PostSong.css';
import { RootState } from '../../store';
import { Song as SongType } from '../../../features/User/getUserSlice';

const PostSong =()=>  {
  const dispatch = useDispatch();
  const location = useLocation();
  // const { song } = location;
  const song: SongType = {
    title: "asdklfs",
      Song_ID: 1,
      Artist: "22",
      Song_Name: "asdklfjas",
      Album_Cover: "asdjklfhsa",
      Release_Date: "djksafhk",
      Type: "sadjklfh",
      isFavorite: false,
  }

  // component state
  const [userSumbitted, setUserSubmitted] = useState(false);

  const User = useSelector((state: RootState) => state.user);
  const UserName = User.userInfo.UserName;
  const UserId = User.userInfo.User_Id;
  const navigate = useNavigate();
  // const [validation, setValidation] = useState(false);
  const addBody = (input: any) => {
    return {
      Post_ID: Math.floor(Math.random() * 100),
      Song: {

        // Song_ID: song.Song_ID,
        // Artist: song.Artist,
        // Song_Name: song.Song_Name,
        // Album_Cover: song.Album_Cover,
        // Release_Date: song.Release_Date,
        // Type: song.Type,
        // isFavorite: song.isFavorite,
        ...song,
      },
      Body: input,
      Author: { Author: UserName, Author_Id: UserId },
      Comments: [],
    };
  };
  const handlePostClick = async (input: any) => {
    const payload = addBody(input);
    dispatch(addPosts(payload));
    await createPost(payload);
    dispatch(resetSearch());
    setUserSubmitted(true);
    navigate("/")
    // setValidation(true);
  };

  return (
    <section className="post-form">
      <Song
        Song={song}
        handlePostClick={handlePostClick}
      />
      <section className="song-search-container">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        {/* {userSumbitted && navigate("/") } */}
      </section>
    </section>
  );
}

export default withRouter(PostSong);
