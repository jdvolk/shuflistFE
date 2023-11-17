/* eslint-disable arrow-body-style */
/* eslint-disable no-return-assign */
/* eslint-disable quote-props */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line no-unused-vars
import { Song, addToFavorites, removeFromFavorites } from './getUserSlice';
import { usePostRequest } from '../networkReqHooks/usePostRequest';
import { useFetchDispatch } from '../networkReqHooks/useFetchDispatch';
import { useFindPost } from './UserHooks/useFindPost';
import { useFavoritesActions } from './UserHooks/useFavoritesActions';

import { url } from '../ApiUrl';
import { AppDispatch, RootState } from '../../app/store';

// const url = 'http://localhost:10000/';

interface Author {
  Author_ID: number;
  AuthorHandle: string;
}

export interface Comment {
  Comment_ID: number;
  Author: Author;
  Body: string;
  Post_ID: number; // Changed to number from string
}

export interface Post {
  Post_ID: number;
  Song: Song;
  Comments: Comment[];
  isFavorite?: boolean;
}

export interface UserPostState {
  isLoading: boolean;
  posts: Post[] | any[];
}

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
    //   useFavoritesActions(store.getState(), action);
    },
    unFavoritePosts: (state, action) => {
      // useFavoritesActions(store.getState(), action);
    },
    addComment: (state, action) => {
      if (action.payload !== undefined) {
        // const foundPost = useFindPost(store.getState(), action);
        // if (foundPost !== null) {
        //   foundPost.Comments.push(action.payload);
        // }
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
  useFetchDispatch(fullUrl, fetchPosts, stopLoading, dispatch);
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

export const createPost = async (post: Post) => {
  const fullUrl = `${url}searchResults`;
  await usePostRequest(fullUrl, post);
};

export const postComment = async (comment: Comment) => {
  const fullUrl = `${url}Home/${comment.Post_ID}`;
  await usePostRequest(fullUrl, comment);
};

export const postFavorite = async (song: Song|null) => {
  const fullUrl = `${url}favorites`;
  // might need to impliment the favorites actions here
  await usePostRequest(fullUrl, song);
};

export const deleteFavorite = async (song:Song) => {
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
export const findSong = (id: number, state: RootState) => state.posts.posts.find((post: Post) => post.Post_ID === id);
export default userPosts.reducer;
