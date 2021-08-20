/* eslint-disable consistent-return */
/* eslint-disable arrow-body-style */
import React from 'react';
import defaultAlbum from '../../../../assets/default_album.jpg';

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
const renderDefault = (songDetails) => {
  let date;
  if (songDetails.Release_Date) date = songDetails.Release_Date;
  const albumArt = songDetails.Album_Cover ?? defaultAlbum;
  return (
    <section className="song-default">
      <img
        className="album-cover"
        src={albumArt}
        alt={`album cover for${songDetails.Song_Name}by${songDetails.Artist}`}
        draggable="false"
      />
      <section className="song-description">
        {songDetails.Song_Name && (
          <p>
            Song:
            {songDetails.Song_Name}
          </p>
        )}
        {songDetails.Artist && (
          <p>
            Artist:
            {songDetails.Artist}
          </p>
        )}
        {songDetails.Type && (
          <p>
            Type:
            {songDetails.Type}
          </p>
        )}
        {date && (
          <p>
            Release Date:
            {date}
          </p>
        )}
      </section>
    </section>
  );
};

export default renderDefault;
