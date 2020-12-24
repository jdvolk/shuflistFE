/* eslint-disable arrow-body-style */
import React from 'react';
import { useSelector } from 'react-redux';
import Song from '../../Components/Song/Song';

function Favorites(props) {
  // eslint-disable-next-line react/prop-types
  const { location } = props;
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const favorites = useSelector((state) => state.user.userInfo.favorites);
  // let resultsList = null;
  const resultsList = favorites.map((song) => {
    // const songDetails = song.song;
    console.log(song);
    return (
      <section
        key={Math.random()}
      >
        <Song
          Song={song}
          // Song={{
          //   Song_ID: song.Song_,
          //   Artist: songDetails.Artist,
          //   Song_Name: songDetails.Song_Name,
          //   Album_Cover: songDetails.Album_Cover,
          //   isFavorite: 'true',
          // }}
          isSearchResult="false"
          isFavoritesPage="true"
          location={location}
        />
      </section>
    );
  });

  return (
    <>
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

export default Favorites;
