import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// action/reducer imports
import {
  songInput,
  fetchResults,
  selectSongInput,
  resetInput,
} from './songInputSlice';

// app imports
import './SongInput.css';
import Emoji from '../../app/Components/Emoji/Emoji';

function SongSearch() {

  // hooks
  const input = useSelector(selectSongInput);
  const dispatch = useDispatch();
  const [ userInput, setSongInput ] = useState(input);

  return (
    <section className="song-search-container">
      <input
        type="text"
        name="text-input"
        className="song-input"
        value={userInput}
        onChange={e => setSongInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            dispatch(fetchResults(userInput))
            setSongInput('')
          }}
        }
      ></input>
      <section
          onClick={() => {
            dispatch(fetchResults(userInput))
            setSongInput('')
          }}
      >
        <Emoji 
          label='search' 
        />
      </section>
      
    </section>
  )
}

export default SongSearch ; 