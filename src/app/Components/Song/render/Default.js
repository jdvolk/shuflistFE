/* eslint-disable consistent-return */
/* eslint-disable arrow-body-style */
import React from 'react';

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
const renderDefault = (songDetails) => {
  return (
    <section className="song-default">
      <img
        className="album-cover"
        src={songDetails.Album_Cover}
        alt={`album cover for${songDetails.Song_Name}by${songDetails.Artist}`}
      />
      <section className="song-description">
        <p>
          Song:
          {songDetails.Song_Name}
        </p>
        <p>
          Artist:
          {songDetails.Artist}
        </p>
      </section>
    </section>
  );
};

export default renderDefault;
