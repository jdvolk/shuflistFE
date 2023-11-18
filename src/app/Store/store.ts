import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import counterReducer from './counter/counterSlice';
import songInputReducer from './SongSearch/songInputSlice';
import userReducer from './User/getUserSlice';
import userPostsReducer from './User/userPostsSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    songSearch: songInputReducer,
    user: userReducer,
    posts: userPostsReducer,
  },
  // middleware: new MiddlewareArray().concat(additionalMiddleware, logger)
});
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export type RootState = ReturnType<typeof store.getState>;

export default store;
