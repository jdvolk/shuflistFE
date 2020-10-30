/* eslint-disable arrow-body-style */
/* eslint-disable no-return-assign */
/* eslint-disable quote-props */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
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
    addPosts: (state, action) => {
      state.posts = action.payload;
    },
    favorite: (state, action) => {
      const foundPost = state.posts
        .find((post) => post.id === action.payload)
        || action.payload;
      foundPost.song.isFavorite = 'true';
    },
    unFavorite: (state, action) => {
      const foundPost = state.posts
        .find((post) => post.id === action.payload)
        || action.payload;
      foundPost.song.isFavorite = 'false';
    },
    // switchFavorite: (state, action) => {
    //   const foundPost = state.posts
    //     .find((post) => post.id === action.payload);
    //   if (foundPost.song.isFavorite === 'true') {
    //     foundPost.song.isFavorite = 'false';
    //     removeFromFavorites(foundPost);
    //   } else {
    //     foundPost.song.isFavorite = 'true';
    //     dispatch(addToFavorites(foundPost));
    //   }
    // },
  },
});

export const {
  startLoading,
  stopLoading,
  addPosts,
  favorite,
  unFavorite,
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
    dispatch(addPosts(parsed.posts));
  } catch (error) {
    console.error(error);
  } finally {
    // dispatch(resetInput())
    dispatch(stopLoading());
  }
};

export const switchFavorite = (foundPost) => (dispatch) => {
  console.log(foundPost);
  if (foundPost.song.isFavorite === 'true') {
    dispatch(unFavorite(foundPost.id));
    dispatch(removeFromFavorites(foundPost.id));
  } else {
    dispatch(favorite(foundPost.id));
    dispatch(addToFavorites(foundPost));
  }
};

export const selectPosts = (state) => state.posts.posts;
export const findSong = (id) => selectPosts.find((song) => song.id === id);
export default userPosts.reducer;
