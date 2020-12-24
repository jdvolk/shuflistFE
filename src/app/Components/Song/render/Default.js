/* eslint-disable consistent-return */
/* eslint-disable arrow-body-style */
import React from 'react';

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
const renderDefault = (songDetails) => {
  return (
    <>
      <img
        className="album-cover"
        src={songDetails.Album_Cover}
        alt={`album cover for${songDetails.Song_Name}by${songDetails.Artist}`}
      />
      <section className="song-description">
        <h4>
          Song:
          {songDetails.Song_Name}
        </h4>
        <h4>
          Artist:
          {songDetails.Artist}
        </h4>
      </section>
    </>
  );
};

export default renderDefault;
