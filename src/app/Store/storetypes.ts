import { useDispatch } from 'react-redux';
import store from './store';

// dispatch
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
// middleware (dependancy cycle if here)
// export const listenerMiddleware = createListenerMiddleware();
// export type AppStartListening = TypedStartListening<RootState, AppDispatch>;
// export const startAppListening =
//   listenerMiddleware.startListening as AppStartListening;
// export const addAppListener = addListener as TypedAddListener<
//   RootState,
//   AppDispatch
// >;

export interface UserInfoState {
  id: string;
  handle: string;
  displayName: string;
  createdAt?: string;
  updatedAt?: string;
  Favorites: any[];
  Following: any[];
  Followers: any[];
}
export interface UserState {
  isLoggedIn: boolean;
  userInput: string;
  userInfo: UserInfoState;
  isLoading: boolean;
  status?: string | null;
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
export interface Author {
  Author_ID: string;
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
  Author: Author;
  Body: string;
}

export interface UserPostState {
  isLoading: boolean;
  posts: Post[] | any[];
}
