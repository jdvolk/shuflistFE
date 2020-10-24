import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import songInputReducer from '../features/SongSearch/songInputSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    songSearch: songInputReducer,

  },
});
