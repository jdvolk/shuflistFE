/* eslint-disable quote-props */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import useFetchDispatch from '../networkReqHooks/useFetchDispatch';
import useSongIndex from '../User/UserHooks/useSongIndex';
// eslint-disable-next-line import/no-cycle
// const url = 'http://localhost:10000/';
import url from '../ApiUrl';

export const userSlice = createSlice({
  name: 'User',
  initialState: {
    isLoggedIn: false,
    userInput: '',
    userInfo: {
      User_Id: '',
      UserName: '',
      Favorites: [],
      Following: [],
      Followers: [],
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
      const foundSongIndex = useSongIndex(state, action);
      if (foundSongIndex === -1) {
        state.userInfo.Favorites.unshift(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      if (action.payload !== undefined) {
        const foundSongIndex = useSongIndex(state, action);
        if (foundSongIndex > -1) {
          state.userInfo.Favorites.splice(foundSongIndex, 1);
        }
      }
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
  const fullUrl = `${url}User`;
  useFetchDispatch(fullUrl, login, stopLoading, dispatch);
};

export const selectUser = (state) => state.user;
export const selectFavorites = (state) => state.user.userInfo.Favorites;
export const selectUserInput = (state) => state.user.userInfo.userInput;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
// export const selectUserPosts = state => state.user.userInfo.posts;

export default userSlice.reducer;
