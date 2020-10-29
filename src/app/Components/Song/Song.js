/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Song.css';

import { switchFavorite } from '../../../features/User/userPostsSlice';

// import Emoji from '../Emoji/Emoji'

function Song(props) {
  // eslint-disable-next-line max-len
  const currentSong = useSelector((state) => state.posts.posts.find((song) => song.id === props.id));
  // const favorites = (isFavorite) => (isFavorite ? 'true' : 'false');
  // eslint-disable-next-line max-len
  const dispatch = useDispatch();
  const handleFavClick = () => {
    dispatch(switchFavorite(props.id));
  };
  // explicitly stating props
  // const [ albumCover, artist, title, isSearchResult  ] = props;
  // render
  // const switchFavorite = (isFavorite) => favorites(!isFavorite);
  return (
    <section className="song-container">
      <img className="album-cover" src={props.albumCover} alt={`album cover for${props.title}by${props.artist}`} />
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
      {props.isSearchResult === true && (
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
          className={`song ${currentSong.isFavorite}`}
          label="check"
          onClick={handleFavClick}
        />
      )}
      {props.isFavorite }
    </section>
  );
}

export default Song;
