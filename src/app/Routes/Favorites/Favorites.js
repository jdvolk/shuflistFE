/* eslint-disable arrow-body-style */
import React from 'react';
import { useSelector } from 'react-redux';
import Song from '../../Components/Song/Song';

function Favorites() {
  // const { isLoggedIn } = props
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const favorites = useSelector((state) => state.user.userInfo.favorites);
  let resultsList = null;
  if (favorites !== '') {
    resultsList = favorites.map((song) => {
      return (
        <section
          key={Math.random()}
        >
          <Song
            albumCover={song.Album_Cover}
            artist={song.Artist}
            title={song.Song_Name}
            song={song}
            isSearchResult="false"
            isFavoritesPage="true"
          />
        </section>
      );
    });
  }
  return (
    <>
      <section className="favorites-page">
        {resultsList || null }
      </section>
    </>
  );
}

export default Favorites;
