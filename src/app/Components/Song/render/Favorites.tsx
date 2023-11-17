/* eslint-disable consistent-return */
/* eslint-disable arrow-body-style */
import React from 'react';
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
export const renderFavorites = (passedSong: any, handleFavClick: any) => {
  if (passedSong.Song_ID) {
    return (
      <section>
        <section
          className="song"
          // label="check"
          onClick={handleFavClick}
        >
          <section
            className="song x"
            // label="x"
          />
        </section>
      </section>
    );
  }
};
