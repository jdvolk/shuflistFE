/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React from 'react';
import { useSelector } from 'react-redux';

// app imports
import Song from '../../Components/Song/Song';
// import SongSearch from '../../../features/SongSearch/Song_Input';

// UI
import './SongResults.css';
import { RootState } from '../../store';

let resultsList: any = null;

export const SearchResults = (props: any) => {
  const searchResults = useSelector(
    (state: RootState) => state.songSearch.results
  );

  if (searchResults.length) {
    resultsList = searchResults.map((song: any) => {
      const songDetails = song.data;
      // eslint-disable-next-line radix
      const intId = parseInt(songDetails.id);
      return (
        <section key={Math.random()}>
          <Song
            // eslint-disable-next-line react/prop-types
            location={props.location}
            Song={{
              // Song_ID: songDetails?.data ? songDetails.data.id : songDetails.id,
              Song_ID: intId,
              Artist: songDetails.authors?.length
                ? songDetails.authors[0].name
                : null,
              Type: song.type,
              Song_Name: songDetails.name,
              Release_Date: songDetails.releaseDate,
              Album_Cover: songDetails.displayResources?.default
                ? songDetails.displayResources.default
                : null,
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
      <section className="search-results">{resultsList || null}</section>
    </>
  );
};
