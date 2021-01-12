/* eslint-disable arrow-body-style */
import React from 'react';
import { useSelector } from 'react-redux';

// app imports
import Song from '../../Components/Song/Song';
import SongSearch from '../../../features/SongSearch/Song_Input';

// UI
import './SongResults.css';

let resultsList = null;

function SongResults(props) {
  const searchResults = useSelector((state) => state.songSearch.results);

  if (searchResults !== '') {
    resultsList = searchResults.map((song) => {
      return (
        <section
          key={Math.random()}
        >
          <Song
            // eslint-disable-next-line react/prop-types
            location={props.location}
            Song={{
              Song_ID: song.data.id,
              Artist: song.data.authors ? song.data.authors[0].name : null,
              Type: song.type,
              Song_Name: song.data.name,
              Release_Date: song.data.releaseDate,
              Album_Cover: 'https://i.scdn.co/image/ab67616d0000b2736c6c8ec19a095e0f881b9ddd',
              isFavorite: false,
            }}
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
