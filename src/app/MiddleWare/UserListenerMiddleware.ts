import {
  createListenerMiddleware,
  addListener,
  isAnyOf,
} from '@reduxjs/toolkit';
import type { TypedStartListening, TypedAddListener } from '@reduxjs/toolkit';
import {
  getUserFailed,
  // UserStatus,
  getUserInfo,
  getUserSuccess,
  login,
  logout,
  startLoading,
  stopLoading,
} from '../Store/User/getUserSlice';

import type { RootState, AppDispatch } from '../Store/storetypes';
import { userApi } from '../Api/UserApiSlice';

export const listenerMiddleware = createListenerMiddleware();

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

export const startAppListening =
  listenerMiddleware.startListening as AppStartListening;

export const addAppListener = addListener as TypedAddListener<
  RootState,
  AppDispatch
>;

// trigger login flow
startAppListening({
  actionCreator: getUserInfo,
  effect: async (action, listenerApi) => {
    // listenerApi.cancelActiveListeners();
    listenerApi.dispatch(startLoading());
    listenerApi.dispatch(
      userApi.endpoints.getUserInfo.initiate(
        action.payload
        // {subscriptionOptions: { pollingInterval: 50000 },}
      )
    );
  },
});

// if getUserInfo fulfills
startAppListening({
  matcher: isAnyOf(
    userApi.endpoints.getUserInfo.matchFulfilled
    // authApi.endpoints.logout.matchFulfilled
  ),
  effect: (action, listenerApi) => {
    if (action.meta.arg.endpointName === 'getUserInfo') {
      const { user } = listenerApi.getState();
      listenerApi.dispatch(getUserSuccess());
      listenerApi.dispatch(login(user));
      listenerApi.dispatch(stopLoading());
      // localStorage.setItem(AUTHENTICATED_USER, JSON.stringify(user));
      // set up persist
    }
    if (action.meta.arg.endpointName === 'logout') {
      // localStorage.removeItem(AUTHENTICATED_USER);
    }
  },
});

// if 404 logout
startAppListening({
  matcher: isAnyOf(userApi.endpoints.getUserInfo.matchRejected),
  effect: (action, listenerApi) => {
    if (action.meta.arg.endpointName === 'getUserInfo') {
      // listenerApi.dispatch(getUserFailed());
      listenerApi.dispatch(logout());
      // localStorage.removeItem(AUTHENTICATED_USER);
    }
  },
});
