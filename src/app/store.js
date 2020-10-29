import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import songInputReducer from '../features/SongSearch/songInputSlice';
import userReducer from '../features/User/getUserSlice';
import userPostsReducer from '../features/User/userPostsSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    songSearch: songInputReducer,
    user: userReducer,
    posts: userPostsReducer,
  },
});
