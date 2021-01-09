/* eslint-disable arrow-body-style */
/* eslint-disable no-return-assign */
/* eslint-disable quote-props */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line no-unused-vars
import { addToFavorites, removeFromFavorites } from './getUserSlice';
import usePostRequest from '../networkReqHooks/usePostRequest';
import useFetchDispatch from '../networkReqHooks/useFetchDispatch';
import useFindPost from './UserHooks/useFindPost';
import useFavoritesActions from './UserHooks/useFavoritesActions';

const url = 'http://localhost:10000/';

export const userPosts = createSlice({
  name: 'UserPosts',
  initialState: {
    posts: [
      {
        Post_ID: 0,
        Song: {},
        Comments: [
          {
            Comment_ID: 0,
            Author: {
              Author_ID: 0,
              Author: 'string',
            },
            Body: 'String',
            Post_ID: 0,
          },
        ],
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
      state.posts.unshift(action.payload);
    },
    favoritePosts: (state, action) => {
      useFavoritesActions(state, action);
    },
    unFavoritePosts: (state, action) => {
      useFavoritesActions(state, action);
    },
    addComment: (state, action) => {
      if (action.payload !== undefined) {
        const foundPost = useFindPost(state, action);
        if (foundPost !== null) {
          foundPost.Comments.push(action.payload);
        }
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
  addComment,
} = userPosts.actions;

// eslint-disable-next-line no-unused-vars
export const getPosts = (id) => async (dispatch) => {
  dispatch(startLoading());
  const fullUrl = `${url}Home`;
  useFetchDispatch(fullUrl, fetchPosts, stopLoading, dispatch);
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

export const createPost = async (post) => {
  const fullUrl = `${url}searchResults`;
  await usePostRequest(fullUrl, post);
};

export const postComment = async (comment) => {
  const fullUrl = `${url}Home/${comment.Post_ID}`;
  await usePostRequest(fullUrl, comment);
};

export const postFavorite = async (song) => {
  const fullUrl = `${url}favorites`;
  // might need to impliment the favorites actions here
  await usePostRequest(fullUrl, song);
};

export const deleteFavorite = async (song) => {
  const fullUrl = `${url}favorites/${song.Song_ID}`;
  try {
    await fetch(fullUrl, {
      method: 'delete',
      body: JSON.stringify(song),
    });
  } catch (error) {
    console.log(error);
  }
};

export const selectPosts = (state) => state.posts.posts;
export const findSong = (id) => selectPosts.find((song) => song.Song_ID === id);
export default userPosts.reducer;
