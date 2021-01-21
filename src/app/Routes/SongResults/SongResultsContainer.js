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
      const songDetails = song.data;
      // eslint-disable-next-line no-debugger
      return (
        <section
          key={Math.random()}
        >
          <Song
            // eslint-disable-next-line react/prop-types
            location={props.location}
            Song={{
              Song_ID: songDetails.id,
              Artist: songDetails.authors?.length ? songDetails.authors[0].name : null,
              Type: song.type,
              Song_Name: songDetails.name,
              Release_Date: songDetails.releaseDate,
              Album_Cover: songDetails.displayResources?.default
                ? songDetails.displayResources.default : null,
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
