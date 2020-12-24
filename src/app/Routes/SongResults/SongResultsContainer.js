/* eslint-disable arrow-body-style */
import React from 'react';
import { useSelector } from 'react-redux';

import './SongResults.css';
import Song from '../../Components/Song/Song';
import SongSearch from '../../../features/SongSearch/Song_Input';

// console.log(searchResults);
let resultsList = null;

function SongResults(props) {
  const searchResults = useSelector((state) => state.songSearch.results);
  if (searchResults !== '') {
    resultsList = searchResults.map((song) => {
      // eslint-disable-next-line no-param-reassign
      // song = song.song;
      return (
        <section
          key={Math.random()}
        >
          <Song
            // eslint-disable-next-line react/prop-types
            location={props.location}
            Song={song}
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
