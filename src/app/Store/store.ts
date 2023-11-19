import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query';
import counterReducer from './counter/counterSlice';
import songInputReducer from './SongSearch/songInputSlice';
import userReducer from './User/getUserSlice';
import userPostsReducer from './User/userPostsSlice';
import { userApi } from './Api/UserApiSlice';
import { listenerMiddleware } from './ListenerMiddleware';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    songSearch: songInputReducer,
    user: userReducer,
    posts: userPostsReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(listenerMiddleware.middleware)
      .concat(userApi.middleware),
});
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
export default store;
