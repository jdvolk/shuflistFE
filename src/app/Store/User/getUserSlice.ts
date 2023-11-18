import { createSlice, PayloadAction, CaseReducer } from '@reduxjs/toolkit';
import {
  createFetchDispatch,
  createPostRequest,
} from '../networkReqHooks/NetworkUtils';

import type { AppDispatch, RootState, UserState } from '../storetypes';
import { apiUrl, url } from '../ApiUrl';
import { getSongIndex } from './UserUtils/utils';

const initialState: UserState = {
  isLoggedIn: false,
  userInput: '',
  userInfo: {
    User_Id: '',
    UserName: '',
    Favorites: [],
    Following: [],
    Followers: [],
  },
  isLoading: false,
};
export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    stopLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    login: (state, action) => {
      state.userInfo = {
        ...state.userInfo,
        ...action.payload,
      };
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.userInfo = {
        User_Id: '',
        UserName: '',
        Favorites: [],
        Following: [],
        Followers: [],
      };
      state.isLoggedIn = false;
    },
    resetInput: (state) => {
      state.userInput = '';
    },
    addToFavorites: (state, action: PayloadAction<any>) => {
      const foundSongIndex = getSongIndex(state, action);
      if (foundSongIndex === -1) {
        state.userInfo.Favorites.unshift(action.payload);
      }
    },
    removeFromFavorites: (state, action) => {
      if (action.payload !== undefined) {
        const foundSongIndex = getSongIndex(state, action);
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

export const getUser = () => async (dispatch: AppDispatch) => {
  dispatch(startLoading());
  const fullUrl = `${url}user/`;
  createFetchDispatch(fullUrl, login, stopLoading, dispatch);
};
// export const loginUser = async (dispatch: AppDispatch, userName: string, password: string) => {
//   const fullUrl
// }
export const loginUser = async (payload: any, dispatch: AppDispatch) => {
  // useFetchDispatch(`http://localhost:8000/users/${payload.userHandle}`, payload);
  const fullUrl = `${apiUrl}users/${payload.userHandle}`;
  try {
    const response = await fetch(fullUrl);
    const parsed = await response.json();
    dispatch(startLoading());
    if (parsed.error === null) dispatch(login(parsed.data));
  } catch (error) {
    console.log(error);
  } finally {
    // dispatch(login(parsed))
    dispatch(stopLoading());
    // return parsed;
  }
};
export const postUser = (payload: any) => {
  createPostRequest('http://localhost:8000/users/', payload);
};

export const selectUser = (state: RootState) => state.user;
export const selectFavorites = (state: RootState) =>
  state.user.userInfo.Favorites;
export const selectUserInput = (state: RootState) => state.user.userInput;
export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
// export const selectUserPosts = state => state.user.userInfo.posts;

export default userSlice.reducer;
