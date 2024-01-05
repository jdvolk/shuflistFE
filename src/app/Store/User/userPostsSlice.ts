import { createSlice } from '@reduxjs/toolkit';
import { addToFavorites, removeFromFavorites } from './getUserSlice';
import {
  createFetchDispatch,
  createPostRequest,
} from '../networkReqHooks/NetworkUtils';

import type {
  AppDispatch,
  Post,
  RootState,
  Song,
  UserPostState,
  Comment,
} from '../storetypes';
import { url } from '../ApiUrl';
import { getFavoritesActions, getFindPost } from './utils';

const initialState: UserPostState = {
  isLoading: false,
  posts: [
    // {
    //   Post_ID: 0,
    //   Song: {
    //     Song_ID: 0,
    //     title: 'string;',
    //     isFavorite: false ,
    //     Artist: 'string',
    //     Song_Name: 'string',
    //     Album_Cover: 'string',
    //     Release_Date: 'string',
    //     Type: 'string'
    //   },
    //   Comments: [
    //     {
    //       Comment_ID: 0,
    //       Author: {
    //         Author_ID: 0,
    //         AuthorHandle: "string",
    //       },
    //       Body: "String",
    //       Post_ID: 0,
    //     },
    //   ],
    //   isFavorite: false,
    // },
  ],
};

export const userPosts = createSlice({
  name: 'UserPosts',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    stopLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    fetchPosts: (state, action) => {
      state.posts = action.payload;
    },
    addPosts: (state, action) => {
      state.posts.unshift(action.payload);
    },
    favoritePosts: (state, action) => {
      getFavoritesActions(state, action);
    },
    unFavoritePosts: (state, action) => {
      getFavoritesActions(state, action);
    },
    addComment: (state, action) => {
      if (action.payload !== undefined) {
        const foundPost = getFindPost(state, action);
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
export const getPosts = (id: number) => async (dispatch: AppDispatch) => {
  dispatch(startLoading());
  const fullUrl = `${url}Home`;
  createFetchDispatch(fullUrl, fetchPosts, stopLoading, dispatch);
};

export const switchFavorite = (foundPost: Post) => (dispatch: AppDispatch) => {
  if (foundPost.isFavorite === true) {
    dispatch(unFavoritePosts(foundPost.Post_ID));
    dispatch(removeFromFavorites(foundPost.Post_ID));
  } else {
    dispatch(favoritePosts(foundPost.Post_ID));
    dispatch(addToFavorites(foundPost.Song));
  }
};

// convert to api slice/listener
export const createPost = async (post: Post) => {
  const fullUrl = `${url}searchResults`;
  await createPostRequest(fullUrl, post);
};

// convert to api slice/listener
export const postComment = async (comment: Comment) => {
  const fullUrl = `${url}Home/${comment.Post_ID}`;
  await createPostRequest(fullUrl, comment);
};

export const postFavorite = async (song: Song | null) => {
  const fullUrl = `${url}favorites`;
  // might need to impliment the favorites actions here
  await createPostRequest(fullUrl, song);
};

export const deleteFavorite = async (song: Song) => {
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

export const selectPosts = (state: RootState) => state.posts.posts;
export const findSong = (id: number, state: RootState) =>
  state.posts.posts.find((post: Post) => post.Post_ID === id);
export default userPosts.reducer;
