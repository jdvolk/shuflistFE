/* eslint-disable import/prefer-default-export */
import { PayloadAction } from '@reduxjs/toolkit';
import type { RootState, UserState, Post } from '../../storetypes';

interface Song {
  Song_ID: number;
}

export const getSongIndex = (state: UserState, action: PayloadAction<Song>) => {
  return state.userInfo.Favorites.findIndex((song: Song) => {
    return song.Song_ID === action.payload.Song_ID;
  });
};

export const getFindPost = (state: RootState, action: PayloadAction<Post>) => {
  const found =
    state.posts.posts.find(
      (post: Post) => post.Post_ID === action.payload.Post_ID
    ) || null;
  return found;
};

export const getFavoritesActions = (
  state: RootState,
  action: PayloadAction<any>
) => {
  const foundPost = getFindPost(state, action);
  if (foundPost !== null) {
    foundPost.Song.isFavorite = !foundPost.Song.isFavorite;
  }
};
