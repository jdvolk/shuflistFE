import React from 'react';
import './Song.css';

// import Emoji from '../Emoji/Emoji'

function Song(props) {
  // explicitly stating props
  // const [ albumCover, artist, title, isSearchResult  ] = props;
  // render
  return (
    <section className="song-container">
      <img className="album-cover" src={props.albumCover} alt={'album cover for' + props.title + 'by' + props.artist} />
      <section className="song-description">
        <h4>Song: {props.title}</h4>
        <h4>Artist: {props.artist}</h4>
      </section>
      {props.isSearchResult === true &&
      <>
        <section className="choose-song">
          <section className="song x" label="x"></section>
          <section className="song check" label="check"></section>
        </section>
        <section className="song favorite" label="check"></section>
      </>}
      {!props.isSearchResult && 
        {/* comments */},
        <section className="song favorite" label="check"></section>
      } 
      {props.isFavorite }
    </section>
  );
};

export default Song;