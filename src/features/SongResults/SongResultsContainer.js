/* eslint-disable arrow-body-style */
import React from 'react';
import { useSelector } from 'react-redux';

import './SongResults.css';
import Song from '../../app/Components/Song/Song';
import SongSearch from '../SongSearch/Song_Input';

// console.log(searchResults);
let resultsList = null;

function SongResults() {
  const searchResults = useSelector((state) => state.songSearch.results);
  if (searchResults !== '') {
    resultsList = searchResults.map((song) => {
      return (
        <section
          key={Math.random()}
        >
          <Song
            albumCover={song.Album_Cover}
            artist={song.Artist}
            title={song.Song_Name}
            isSearchResult
          />
        </section>
      );
    });
  }
  return (
    <>
      <SongSearch />
      <section className="search-results">
        {resultsList || null }
      </section>
    </>
  );
}

export default SongResults;
