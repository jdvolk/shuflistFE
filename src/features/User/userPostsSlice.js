/* eslint-disable arrow-body-style */
/* eslint-disable no-return-assign */
/* eslint-disable quote-props */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line no-unused-vars
import { addToFavorites, removeFromFavorites } from './getUserSlice';

const url = 'http://localhost:10000/';

export const userPosts = createSlice({
  name: 'UserPosts',
  initialState: {
    posts: [
      {
        id: 0,
        song: {},
        comments: [],
        // isFavorite: 'false',
      },
    ],
    isloading: false,
  },
  reducers: {
    startLoading: (state) => {
      state.isloading = !state.isloading;
    },
    stopLoading: (state) => {
      state.isloading = !state.isloading;
    },
    fetchPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPosts: (state, action) => {
      console.log(action.payload);
      state.posts.unshift(action.payload);
    },
    favoritePosts: (state, action) => {
      const foundPost = state.posts
        .find((post) => post.Post_ID === action.payload)
        || null;
      if (foundPost !== null) {
        foundPost.Song.isFavorite = true;
      }
    },
    unFavoritePosts: (state, action) => {
      const foundPost = state.posts
        .find((post) => post.Post_ID === action.payload)
        || null;
      if (foundPost !== null) {
        foundPost.Song.isFavorite = false;
      }
    },
  },
});

export const {
  startLoading,
  stopLoading,
  addPosts,
  fetchPosts,
  favoritePosts,
  unFavoritePosts,
} = userPosts.actions;

// eslint-disable-next-line no-unused-vars
export const getPosts = (id) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const response = await fetch(`${url}Home`);
    // const response = await fetch('/user_posts.json');
    const parsed = await response.json();
    dispatch(fetchPosts(parsed));
  } catch (error) {
    console.error(error);
  } finally {
    // dispatch(resetInput())
    dispatch(stopLoading());
  }
};

export const switchFavorite = (foundPost) => (dispatch) => {
  if (foundPost.isFavorite === true) {
    dispatch(unFavoritePosts(foundPost.Post_ID));
    dispatch(removeFromFavorites(foundPost.Post_ID));
  } else {
    dispatch(favoritePosts(foundPost.Post_ID));
    dispatch(addToFavorites(foundPost));
  }
};

export const selectPosts = (state) => state.posts.posts;
export const findSong = (id) => selectPosts.find((song) => song.Song_ID === id);
export default userPosts.reducer;
