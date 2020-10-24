import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './SongResults.css';
import Song from '../../app/Components/Song/Song'

// console.log(searchResults);
let resultsList = null;

function SongResults() {
  const searchResults = useSelector(state => state.songSearch.results)
  if (searchResults !== '') {
    resultsList = searchResults.map(song => {
      return <Song 
        albumCover={song.Album_Cover}
        artist={song.Artist}
        title={song.Song_Name}
      />
    })
  }
  return (
    <section className="search-results">
      {resultsList ? resultsList : null }
    </section>
  )
}

export default SongResults;