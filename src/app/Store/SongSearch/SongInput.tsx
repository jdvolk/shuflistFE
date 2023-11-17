/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// action/reducer imports
import {
  fetchResults,
  selectSongInput,
  selectSearchResults as searchResults,
} from './songInputSlice';

// app imports
import './SongInput.css';
import { Emoji } from '../../Components/Emoji/Emoji';
import { withRouter } from '../../Components/Song/Song';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store';

function SongSearch() {
  // eslint-disable-next-line react/prop-types
  // hooks
  const input = useSelector(selectSongInput);
  const results = useSelector(searchResults);
  const dispatch = useAppDispatch();
  // const [userInput, setSongInput] = useState(input);
  const [userInput, setSongInput] = useState(input);
  const navigate = useNavigate();
  // render
  return (
    <section className="song-search-container">
      <input
        type="text"
        name="text-input"
        className="song-input"
        value={userInput || ''}
        onChange={(e) => setSongInput(e.target.value)}
        // onKeyPress={(e) => {
        //   if (e.key === 'Enter') {
        //     dispatch(fetchResults(userInput));
        //     setSongInput('');
        //   }
        // }}
      />
      <section
        onClick={() => {
          dispatch(fetchResults(userInput));
          navigate('/SearchResults');
          setSongInput('');
        }}
      >
        <Emoji label="search" />
      </section>
    </section>
  );
}

export default withRouter(SongSearch);
