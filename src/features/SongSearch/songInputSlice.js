import { createSlice } from '@reduxjs/toolkit';

// song input actions/reducer
export const songSearchSlice = createSlice({
  name: 'songSearch',
  initialState : {
    inputValue: '',
    results: '',
  },
  reducers: {
    songInput: (state, action) => {
      state.inputValue += action.payload;
    },
    resetInput: state => {
      state.inputValue = ''
    },
    searchResults: (state, action) => {
      state.results = action.payload
    }
  },
});

export const { songInput, searchResults, resetInput } = songSearchSlice.actions;

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

export const selectSongInput = state => state.songSearch.value;
export const selectSearchResults = state => state.songSearch.results;

export default songSearchSlice.reducer;
