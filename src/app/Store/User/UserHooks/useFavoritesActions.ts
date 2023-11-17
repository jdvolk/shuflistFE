import { RootState } from '../../store';
import { Post, UserPostState } from '../userPostsSlice';
import {useFindPost} from './useFindPost';
import {PayloadAction} from '@reduxjs/toolkit';

export const useFavoritesActions = (state: RootState, action: PayloadAction<any> ) => {
  const foundPost = useFindPost(state, action);
  if (foundPost !== null) {
    foundPost.Song.isFavorite = !foundPost.Song.isFavorite;
  }
};


