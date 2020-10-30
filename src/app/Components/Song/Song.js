/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Song.css';

import { switchFavorite } from '../../../features/User/userPostsSlice';

// import Emoji from '../Emoji/Emoji'

function Song(props) {
  const [passedSong, setSong] = useState(null);

  useEffect(() => {
    setSong(props.song);
  }, [props.song]);

  const dispatch = useDispatch();

  const currentSong = useSelector((state) => state.posts.posts
    .find((song) => song.id === props.id));

  const handleFavClick = () => {
    dispatch(switchFavorite(passedSong));
  };
  return (
    <section className="song-container">
      <img
        className="album-cover"
        src={props.albumCover}
        alt={`album cover for${props.title}by${props.artist}`}
      />
      <section className="song-description">
        <h4>
          Song:
          {props.title}
        </h4>
        <h4>
          Artist:
          {props.artist}
        </h4>
      </section>
      {props.isSearchResult === 'true' && (
        <>
          <section className="choose-song">
            <section className="song x" label="x" />
            <section className="song check" label="check" />
          </section>
          {/* <section className="song favorite" label="check" /> */}
          {/* <section className="song favorite" label="check"></section> */}
        </>
      )}
      {props.isSearchResult === 'false' && (
        <section
          className={`song ${currentSong.song.isFavorite}`}
          label="check"
          onClick={handleFavClick}
        />
      )}
      {/* {currentSong.isFavorite && (
        <section
          className={`song ${currentSong.isFavorite}`}
          label="check"
          onClick={handleFavClick}
        />
      )} */}
    </section>
  );
}

export default Song;
