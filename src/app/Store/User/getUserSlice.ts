import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createPostRequest } from '../networkReqHooks/NetworkUtils';

import type { RootState, UserState } from '../storetypes';
import { getSongIndex } from './UserUtils/utils';
import { userApi } from '../../Api/UserApiSlice';

export enum UserStatus {
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}

const initialState: UserState = {
  isLoggedIn: false,
  userInput: '',
  userInfo: {
    id: '',
    handle: '',
    displayName: '',
    Favorites: [],
    Following: [],
    Followers: [],
  },
  isLoading: false,
  status: null,
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
    getUserInfo: (state, action: PayloadAction<string>) => {
      state.userInfo.handle = action.payload;
    },
    getUserSuccess: (state) => {
      state.status = UserStatus.SUCCESS;
    },
    getUserFailed: (state) => {
      state.status = UserStatus.FAILED;
    },
    createUser: () => {},
    createUserSuccess: () => {},
    createUserFailed: () => {},
    login: (state, action) => {
      state.userInfo = {
        ...state.userInfo,
        ...action.payload,
      };
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    logout: (state) => {
      state.userInfo = {
        id: '',
        handle: '',
        displayName: '',
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
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.getUserInfo.matchFulfilled,
      (state, action) => {
        state.userInfo = { ...action.payload.data, ...state.userInfo };
      }
    );
    builder.addMatcher(
      userApi.endpoints.addUser.matchFulfilled,
      (state, action) => {
        state.userInfo = { ...state.userInfo, ...action.payload.data };
        // state.isLoggedIn = true;
      }
    );
    // .addMatcher(userApi.endpoints.logout.matchFulfilled, (state, action) => {
    //  state.user = null;
    // });
  },
});

export const {
  startLoading,
  stopLoading,
  getUserInfo,
  getUserSuccess,
  getUserFailed,
  createUser,
  createUserSuccess,
  createUserFailed,
  login,
  logout,
  resetInput,
  addToFavorites,
  removeFromFavorites,
} = userSlice.actions;

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
