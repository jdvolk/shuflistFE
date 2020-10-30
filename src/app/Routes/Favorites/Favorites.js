/* eslint-disable arrow-body-style */
import React from 'react';
import { useSelector } from 'react-redux';
import Song from '../../Components/Song/Song';

function Favorites(props) {
  // eslint-disable-next-line react/prop-types
  const { location } = props;
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const favorites = useSelector((state) => state.user.userInfo.favorites);

  let resultsList = null;
  if (favorites !== '') {
    resultsList = favorites.map((song) => {
      const songDetails = song.song;
      return (
        <section
          key={Math.random()}
        >
          <Song
            albumCover={songDetails.Album_Cover}
            artist={songDetails.Artist}
            title={songDetails.Song_Name}
            song={song}
            isSearchResult="false"
            isFavoritesPage="true"
            location={location}
          />
        </section>
      );
    });
  }
  return (
    <>
      { favorites.length > 0 && (
        <section className="favorites-page">
          {resultsList || null }
        </section>
      )}
    </>
  );
}

export default Favorites;
