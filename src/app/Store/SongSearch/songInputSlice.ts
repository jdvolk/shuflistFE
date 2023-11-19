import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createFetchDispatch } from '../networkReqHooks/NetworkUtils';
import type { AppDispatch, RootState, Song } from '../storetypes';
import { apiUrl as url } from '../ApiUrl';
import {
  searchApi,
  SongResults,
  Error,
  SongQuery,
} from '../../Api/SearchApiSlice';

interface SearchState {
  inputValue: string;
  results: SongResults[] | null;
  error: Error | null;
}

const initialState: SearchState = {
  inputValue: '',
  results: null,
  error: null,
};

export const songSearchSlice = createSlice({
  name: 'songSearch',
  initialState,
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
    searchResults: (state, action: PayloadAction<SongQuery>) => {
      // fix types for payload
      state.results = action.payload.data;
    },
    resetSearch: (state) => {
      state.results = [];
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      searchApi.endpoints.getSearchResults.matchFulfilled,
      (state, action) => {
        state.results = action.payload.data;
        state.error = action.payload.error;
      }
    );
  },
});

// export actions
export const { songInput, searchResults, resetInput, resetSearch } =
  songSearchSlice.actions;

// selectors to access state out side of this file
export const selectSongInput = (state: RootState) =>
  state.songSearch.inputValue;
export const selectSearchResults = (state: RootState) =>
  state.songSearch.results;

export default songSearchSlice.reducer;
