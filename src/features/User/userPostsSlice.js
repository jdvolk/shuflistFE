/* eslint-disable arrow-body-style */
/* eslint-disable no-return-assign */
/* eslint-disable quote-props */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line no-unused-vars
import { addToFavorites, removeFromFavorites } from './getUserSlice';

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
        .find((post) => post.id === action.payload)
        || null;
      if (foundPost !== null) {
        foundPost.song.isFavorite = 'true';
      }
    },
    unFavoritePosts: (state, action) => {
      const foundPost = state.posts
        .find((post) => post.id === action.payload)
        || null;
      if (foundPost !== null) {
        foundPost.song.isFavorite = 'false';
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
    const response = await fetch('/user_posts.json',
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
    const parsed = await response.json();
    dispatch(fetchPosts(parsed.posts));
  } catch (error) {
    console.error(error);
  } finally {
    // dispatch(resetInput())
    dispatch(stopLoading());
  }
};

export const switchFavorite = (foundPost) => (dispatch) => {
  if (foundPost.song.isFavorite === 'true') {
    dispatch(unFavoritePosts(foundPost.id));
    dispatch(removeFromFavorites(foundPost.id));
  } else {
    dispatch(favoritePosts(foundPost.id));
    dispatch(addToFavorites(foundPost));
  }
};

export const selectPosts = (state) => state.posts.posts;
export const findSong = (id) => selectPosts.find((song) => song.id === id);
export default userPosts.reducer;
