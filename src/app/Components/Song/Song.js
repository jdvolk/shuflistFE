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
  if (props.song) {
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
        {props.location === 'search-result' && (
          <>
            <section className="choose-song">
              <section className="song x" label="x" />
              <section className="song check" label="check" />
            </section>
            <section
              className={`song ${props.song.isFavorite}`}
              label="check"
              onClick={handleFavClick}
            />
            {/* <section className="song favorite" label="check" /> */}
            {/* <section className="song favorite" label="check"></section> */}
          </>
        )}
        {props.location === 'home-page' && (
          <section
            className={`song ${currentSong.song.isFavorite || passedSong.song.isFavorite}`}
            label="check"
            onClick={handleFavClick}
          />
        )}
        {props.location === 'favorites' && (
          <section
            className="song"
            label="check"
            onClick={handleFavClick}
          >
            <section className="song x" label="x" />
          </section>
        )}
      </section>
    );
  // eslint-disable-next-line no-else-return
  } else {
    return (
      <section>Loading...</section>
    );
  }
}

export default Song;
