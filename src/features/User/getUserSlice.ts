import { createSlice, PayloadAction, CaseReducer } from '@reduxjs/toolkit';
import { useFetchDispatch } from '../networkReqHooks/useFetchDispatch';
import { useSongIndex } from './UserHooks/useSongIndex';
import { url, apiUrl } from '../ApiUrl';
import { AppDispatch, RootState } from '../../app/store';
import { usePostRequest } from '../networkReqHooks/usePostRequest';

export interface UserInfoState {
  User_Id: string;
  UserName: string;
  Favorites: any[];
  Following: any[];
  Followers: any[];
}
export interface UserState {
  isLoggedIn: boolean;
  userInput: string;
  userInfo: UserInfoState;
  isLoading: boolean;
}
export interface Song {
  Song_ID: number;
  title: string;
  isFavorite: boolean;
  Artist: string;
  Song_Name: string;
  Album_Cover: string;
  Release_Date: string;
  Type: string;
  // comments: Array<Comment>;
}
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
        ...action.payload};
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
    addToFavorites: (state, action: PayloadAction<Song>) => {
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

export const getUser = () => async (dispatch: AppDispatch) => {
  dispatch(startLoading());
  const fullUrl = `${url}user/`;
  useFetchDispatch(fullUrl, login, stopLoading, dispatch);
};
// export const loginUser = async (dispatch: AppDispatch, userName: string, password: string) => {
//   const fullUrl
// }
export const loginUser = async (payload: any, dispatch: AppDispatch) => {
  // useFetchDispatch(`http://localhost:8000/users/${payload.userHandle}`, payload);
  const url = `${apiUrl}users/${payload.userHandle}`;
  try {
    const response = await fetch(url);
    const parsed = await response.json();
    dispatch(startLoading());
    if(parsed.error === null) dispatch(login(parsed.data));
  } catch (error) {
    console.log(error);
  } finally {
    // dispatch(login(parsed))
    dispatch(stopLoading());
    // return parsed;
  }
};
export const postUser = (payload: any) => {
  usePostRequest('http://localhost:8000/users/', payload);
};

export const selectUser = (state: RootState) => state.user;
export const selectFavorites = (state: RootState) =>
  state.user.userInfo.Favorites;
export const selectUserInput = (state: RootState) => state.user.userInput;
export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
// export const selectUserPosts = state => state.user.userInfo.posts;

export default userSlice.reducer;
