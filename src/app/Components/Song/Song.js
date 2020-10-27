import React from 'react';
import './Song.css';

// import Emoji from '../Emoji/Emoji'

function Song(props) {
  // explicitly stating props
  const { albumCover, artist, title, isPost  } = props;
  // render
  return (
    <section className="song-container">
      <img className="album-cover" src={albumCover} alt={'album cover for' + title + 'by' + artist} />
      <section className="song-description">
        <h4>Song: {title}</h4>
        <h4>Artist: {artist}</h4>
      </section>
      {!isPost &&
      <>
        <section className="choose-song">
          <section className="song x" label="x"></section>
          <section className="song check" label="check"></section>
        </section>
          <section className="song favorite" label="check"></section>
      </>}
      {isPost && 
        {/* <Comments /> */}
      }
    </section>
  );
};

export default Song;