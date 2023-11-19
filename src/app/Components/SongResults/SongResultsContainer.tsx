import React from 'react';
import { useSelector } from 'react-redux';

// app imports
import { SongRender } from '../Song/Song';

// UI
import './SongResults.css';

import { selectSearchResults } from '../../Store/SongSearch/songInputSlice';
import { SongResults } from '../../Api/SearchApiSlice';

export const SearchResults = () => {
  const results = useSelector(selectSearchResults);

  const listMapper = (list: SongResults[] | null) =>
    list?.map((song: SongResults) => {
      const songDetails = song.data;
      // eslint-disable-next-line radix
      const intId = parseInt(songDetails.id);
      return (
        <section key={Math.random()}>
          <SongRender
            Song={{
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
  return (
    <section className="search-results">{listMapper(results) || null}</section>
  );
};
