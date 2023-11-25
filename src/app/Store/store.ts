import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import counterReducer from './counter/counterSlice';
import songInputReducer from './SongSearch/songInputSlice';
import userReducer from './User/getUserSlice';
import userPostsReducer from './User/userPostsSlice';
import { userApi } from '../Api/UserApiSlice';
import { listenerMiddleware as userListenerMiddleware } from '../MiddleWare/UserListenerMiddleware';
import { listenerMiddleware as searchListenerMiddleware } from '../MiddleWare/SearchListenerMiddleware';
import { searchApi } from '../Api/SearchApiSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    songSearch: songInputReducer,
    user: userReducer,
    posts: userPostsReducer,
    [userApi.reducerPath]: userApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: { warnAfter: 128 },
    })
      .prepend(
        userListenerMiddleware.middleware,
        searchListenerMiddleware.middleware
      )
      .concat(userApi.middleware, searchApi.middleware),
});

setupListeners(store.dispatch);
export default store;
