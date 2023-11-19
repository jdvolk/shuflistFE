/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// action/reducer imports
import {
  selectSongInput,
  songInput,
} from '../../Store/SongSearch/songInputSlice';

// app imports
import './SongInput.css';
import { Emoji } from '../Emoji/Emoji';

import { useAppDispatch } from '../../Store/storetypes';

export const SongSearch = () => {
  const input = useSelector(selectSongInput);
  const dispatch = useAppDispatch();
  const [userInput, setSongInput] = useState(input);
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(songInput(userInput));
    navigate('/SearchResults');
  };
  return (
    <section className="song-search-container">
      <input
        type="text"
        name="text-input"
        className="song-input"
        value={userInput || ''}
        onChange={(e) => setSongInput(e.target.value)}
        onKeyDown={(e) => (e.code === 'Enter' ? handleClick() : null)}
      />
      <section onClick={handleClick}>
        <Emoji label="search" />
      </section>
    </section>
  );
};
