/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './Song.css';

// import Emoji from '../Emoji/Emoji'

function Song(props) {
  // explicitly stating props
  // const [ albumCover, artist, title, isSearchResult  ] = props;
  // render
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
          <section className="song favorite" label="check" />
          {/* <section className="song favorite" label="check"></section> */}
        </>
      )}
      {props.isSearchResult === false &&
        <section className="song favorite" label="check" />}
      {props.isFavorite }
    </section>
  );
}

export default Song;
