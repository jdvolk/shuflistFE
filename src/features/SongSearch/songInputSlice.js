import { createSlice } from '@reduxjs/toolkit';

// song input actions/reducer
export const songSearchSlice = createSlice({
  // default state
  name: 'songSearch',
  initialState : {
    inputValue: '',
    results: '',
  },
  reducers: {
    // reducer for searchbar input
    songInput: (state, action) => {
      state.inputValue += action.payload;
    },
    // reset input after search
    resetInput: state => {
      state.inputValue = ''
    },
    // reducer for search results
    searchResults: (state, action) => {
      state.results = action.payload
    },
    resetSearch:  (state) => {
      state.results = ''
    }
  },
});

// export actions
export const { songInput, searchResults, resetInput, resetSearch } = songSearchSlice.actions;

// async function to get search results locally until we have an api set up
export const fetchResults = input =>  async dispatch => {
  dispatch(songInput(input))
  try {
    const response = await fetch("/song_results.json",
      {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    );
    const parsed = await response.json();
    dispatch(searchResults(parsed));
  } catch (error){
    console.error(error)
  } finally {
    dispatch(resetInput())
  }
}
// selectors to access state out side of this file
export const selectSongInput = state => state.songSearch.value;
export const selectSearchResults = state => state.songSearch.results;

export default songSearchSlice.reducer;
