/* eslint-disable arrow-body-style */
import React from 'react';
import { useSelector } from 'react-redux';
import Song from '../../Components/Song/Song';
import { RootState } from '../../store';
// import SongSearch from '../../../features/SongSearch/Song_Input';

export function Favorites(props: any) {
  // eslint-disable-next-line react/prop-types
  const { location } = props;
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const favorites = useSelector((state: RootState) => state.user.userInfo.Favorites);
  // let resultsList = null;
  const resultsList = favorites.map((song: any) => {
    return (
      <section
        key={Math.random()}
      >
        <Song
          Song={song}
          isSearchResult="false"
          isFavoritesPage="true"
          location={location}
        />
      </section>
    );
  });

  return (
    <>
      {/* <SongSearch /> */}
      { favorites.length > 0 && (
        <section className="favorites-page">
          {resultsList || null }
        </section>
      )}
      { favorites.length === 0 && (
        <section className="favorites-page">
          Favorite Some Songs
        </section>
      )}
    </>
  );
}

