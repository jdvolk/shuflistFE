import { PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../getUserSlice';

interface Song {
  Song_ID: number;
}

/* eslint-disable arrow-body-style */
export const useSongIndex = (state: UserState, action: PayloadAction<Song>) => {
  return state.userInfo.Favorites.findIndex((song: Song) => {
    return song.Song_ID === action.payload.Song_ID;
  });
};
