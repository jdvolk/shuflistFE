/* eslint-disable no-param-reassign */
/* eslint-disable quote-props */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {useFetchDispatch} from '../networkReqHooks/useFetchDispatch';
import { AppDispatch, RootState } from '../store';
import {apiUrl as url} from '../ApiUrl';
// const url = 'http://localhost:8000/';
// song input actions/reducer
export const songSearchSlice = createSlice({
  // default state
  name: 'songSearch',
  initialState: {
    inputValue: '',
    results: [],
  },
  reducers: {
    // reducer for searchbar input
    songInput: (state, action: PayloadAction<string>) => {
      state.inputValue += action.payload;
    },
    // reset input after search
    resetInput: (state) => {
      state.inputValue = '';
    },
    // reducer for search results
    searchResults: (state, action: PayloadAction<any>) => {
      // fix types for payload
      state.results = action.payload.data;
    },
    resetSearch: (state) => {
      state.results = [];
    },
  },
});

// export actions
export const {
  songInput,
  searchResults,
  resetInput,
  resetSearch,
} = songSearchSlice.actions;

// async function to get search results locally until we have an api set up

export const fetchResults = (input: string) => async (dispatch: AppDispatch) => {
  // todo js funct to format spaces
  const fullUrl = `${url}media?query=${encodeURIComponent(input)}`;
  console.log(fullUrl);
  dispatch(songInput(input));
  useFetchDispatch(fullUrl, searchResults, resetInput, dispatch);
};

// selectors to access state out side of this file
export const selectSongInput = (state: RootState) => state.songSearch.inputValue;
export const selectSearchResults = (state: RootState) => state.songSearch.results;

export default songSearchSlice.reducer;
