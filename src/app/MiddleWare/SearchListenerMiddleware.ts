import {
  createListenerMiddleware,
  addListener,
  isAnyOf,
} from '@reduxjs/toolkit';
import type { TypedStartListening, TypedAddListener } from '@reduxjs/toolkit';

import type { RootState, AppDispatch } from '../Store/storetypes';
import { searchApi } from '../Api/SearchApiSlice';
import {
  resetSearch,
  searchResults,
  songInput,
} from '../Store/SongSearch/songInputSlice';
import { resetInput } from '../Store/User/getUserSlice';

export const listenerMiddleware = createListenerMiddleware();

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

export const startAppListening =
  listenerMiddleware.startListening as AppStartListening;

export const addAppListener = addListener as TypedAddListener<
  RootState,
  AppDispatch
>;

// trigger search flow
startAppListening({
  actionCreator: songInput,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();
    listenerApi.dispatch(resetSearch());
    listenerApi.dispatch(
      searchApi.endpoints.getSearchResults.initiate(
        action.payload
        // {subscriptionOptions: { pollingInterval: 50000 },}
      )
    );
  },
});

// if search fulfills
startAppListening({
  matcher: isAnyOf(
    searchApi.endpoints.getSearchResults.matchFulfilled
    // authApi.endpoints.logout.matchFulfilled
  ),
  effect: (action, listenerApi) => {
    listenerApi.dispatch(searchResults(action.payload));
    listenerApi.dispatch(resetInput());
  },
});
