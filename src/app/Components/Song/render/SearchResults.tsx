/* eslint-disable arrow-body-style */
import React from 'react';

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
export const renderSearchResults = (
  props: any,
  passedSong: any,
  songDetails: any,
  handleFavClick: any
) => {
  return (
    <section>
      <section className="choose-song">
        <section
          className="song x"
          // label="x"
        />
        <section
          className="song check"
          // label="check"
          // eslint-disable-next-line arrow-body-style
          onClick={() => {
            props.history.push({
              pathname: '/PostSong',
              song: passedSong,
            });
          }}
        />
      </section>
      <section
        className={`song ${songDetails.isFavorite}`}
        // label="check"
        onClick={handleFavClick}
      />
    </section>
  );
};
