/* eslint-disable quote-props */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'User',
  initialState: {
    isLoggedIn: false,
    userInput: '',
    userInfo: {
      userId: '',
      userName: '',
      favorites: [],
      following: [],
      followers: [],
      settings: [],
      isLoading: false,
    },
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    stopLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    login: (state, action) => {
      state.userInfo = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.userInfo = '';
      state.isLoggedIn = false;
    },
    resetInput: (state) => {
      state.userInput = '';
    },
    addToFavorites: (state, action) => {
      // action.payload.isFavorite = 'true';
      state.userInfo.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      // eslint-disable-next-line prefer-destructuring
      // eslint-disable-next-line no-use-before-define
      const foundSong = state.userInfo.favorites
        .findIndex((song) => song.id === action.payload);
      state.userInfo.favorites.splice(foundSong, 1);
      console.log(foundSong);
    },
  },
});

export const {
  startLoading,
  stopLoading,
  login,
  logout,
  resetInput,
  addToFavorites,
  removeFromFavorites,
} = userSlice.actions;

export const getUser = () => async (dispatch) => {
  dispatch(startLoading());
  try {
    const response = await fetch('/user_data.json',
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
    const parsed = await response.json();
    dispatch(login(parsed));
  } catch (error) {
    console.error(error);
  } finally {
    // dispatch(resetInput())
    dispatch(stopLoading());
  }
};

export const selectUser = (state) => state.user;
export const selectFavorites = (state) => state.user.userDetails.favorites;
export const selectUserInput = (state) => state.user.userInfo.userInput;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
// export const selectUserPosts = state => state.user.userInfo.posts;

export default userSlice.reducer;
