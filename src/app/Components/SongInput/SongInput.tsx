/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// action/reducer imports
import {
  // fetchResults,
  selectSongInput,
  selectSearchResults as searchResults,
  songInput,
} from '../../Store/SongSearch/songInputSlice';

// app imports
import './SongInput.css';
import { Emoji } from '../Emoji/Emoji';

import { useAppDispatch } from '../../Store/storetypes';
import { useOnEnterKeyDown } from '../../utils/onEnterKeyDown';

export const SongSearch = () => {
  // eslint-disable-next-line react/prop-types
  // hooks
  const input = useSelector(selectSongInput);
  const dispatch = useAppDispatch();
  // const [userInput, setSongInput] = useState(input);
  const [userInput, setSongInput] = useState(input);
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(songInput(userInput));
    navigate('/SearchResults');
  };
  useOnEnterKeyDown(handleClick);
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
      <section onClick={handleClick}>
        <Emoji label="search" />
      </section>
    </section>
  );
};
