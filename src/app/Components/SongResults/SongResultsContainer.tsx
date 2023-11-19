import React from 'react';
import { useSelector } from 'react-redux';

// app imports
import { SongRender } from '../Song/Song';

// import SongSearch from '../../../features/SongSearch/Song_Input';

// UI
import './SongResults.css';

import { selectSearchResults } from '../../Store/SongSearch/songInputSlice';

export const SearchResults = (props: any) => {
  const results = useSelector(selectSearchResults);

  // if (results.length) {
  const listMapper = (list: any[] | null) =>
    list?.map((song: any) => {
      const songDetails = song.data;
      // eslint-disable-next-line radix
      const intId = parseInt(songDetails.id);
      return (
        <section key={Math.random()}>
          <SongRender
            // eslint-disable-next-line react/prop-types
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
  // }
  return (
    <section className="search-results">{listMapper(results) || null}</section>
  );
};
