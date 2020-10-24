import React from 'react';
import './Song.css';

function Song(props) {
  // explicitly stating props
  const { albumCover, artist, title  } = props;
  // render
  return (
    <section className="song-container">
      <img className="album-cover" src={albumCover} />
      <h4>Song: {title}</h4>
      <h4>Artist: {artist}</h4>
    </section>
  );
};

export default Song;