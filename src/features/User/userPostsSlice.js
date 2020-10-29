/* eslint-disable arrow-body-style */
/* eslint-disable no-return-assign */
/* eslint-disable quote-props */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const userPosts = createSlice({
  name: 'UserPosts',
  initialState: {
    posts: [
      {
        id: 0,
        song: {},
        comments: [],
        isFavorite: 'false',
      },
    ],
  },
  reducers: {
    addPosts: (state, action) => {
      state.posts = action.payload;
    },
    switchFavorite: (state, action) => {
      const foundPost = state.posts.find((post) => post.id === action.payload);
      if (foundPost.isFavorite === 'true') {
        foundPost.isFavorite = 'false';
      } else {
        foundPost.isFavorite = 'true';
      }
    },
  },
});

export const {
  addPosts,
  switchFavorite,
} = userPosts.actions;

// eslint-disable-next-line no-unused-vars
export const getPosts = (id) => async (dispatch) => {
  // eslint-disable-next-line no-unneeded-ternary
  try {
    const response = await fetch('/user_posts.json',
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
    const parsed = await response.json();
    dispatch(addPosts(parsed.posts));
  } catch (error) {
    console.error(error);
  } finally {
    // dispatch(resetInput())
  }
};

export const selectPosts = (state) => state.posts.posts;
export const findSong = (id) => selectPosts.find((song) => song.id === id);
export default userPosts.reducer;
