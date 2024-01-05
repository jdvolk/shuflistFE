/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useMemo } from 'react';
import { Song } from '../../../Store/storetypes';

export const renderSearchResults = (
  songDetails?: Song,
  onClick?: () => void
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
          onClick={onClick}
        />
      </section>
      <section
        className={`song ${songDetails?.isFavorite}`}
        // label="check"
        // onClick={handleFavClick}
      />
    </section>
  );
};
