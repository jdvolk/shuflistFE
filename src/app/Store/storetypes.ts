import { useDispatch } from 'react-redux';
import store from './store';

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export interface UserInfoState {
  User_Id: string;
  UserName: string;
  Favorites: any[];
  Following: any[];
  Followers: any[];
}
export interface UserState {
  isLoggedIn: boolean;
  userInput: string;
  userInfo: UserInfoState;
  isLoading: boolean;
}
export interface Song {
  Song_ID: number;
  title: string;
  isFavorite: boolean;
  Artist: string;
  Song_Name: string;
  Album_Cover: string;
  Release_Date: string;
  Type: string;
  // comments: Array<Comment>;
}
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
