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
import { useAddUserMutation, userApi } from '../Api/UserApiSlice';

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
    if (action.payload.length) {
      listenerApi.dispatch(
        userApi.endpoints.getUserInfo.initiate(
          action.payload,
          { forceRefetch: true }
          // {subscriptionOptions: { pollingInterval: 50000 },}
        )
      );
    }
  },
});

// if getUserInfo fulfills
startAppListening({
  matcher: isAnyOf(
    userApi.endpoints.getUserInfo.matchFulfilled
    // userApi.endpoints.addUser.matchFulfilled
    // authApi.endpoints.logout.matchFulfilled
  ),
  effect: (action, listenerApi) => {
    // listenerApi.cancelActiveListeners();
    if (action.meta.arg.endpointName === 'getUserInfo') {
      listenerApi.dispatch(getUserSuccess());
      listenerApi.dispatch(login(action.payload.data));
      listenerApi.dispatch(stopLoading());
      localStorage.setItem(
        'AUTHENTICATED_USER',
        JSON.stringify(action.payload.data.handle)
      );
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
    listenerApi.cancelActiveListeners();
    if (action.meta.arg.endpointName === 'getUserInfo') {
      // listenerApi.dispatch(getUserFailed());
      // listenerApi.dispatch(logout());
      // localStorage.removeItem('AUTHENTICATED_USER');
    }
  },
});

//  user creation flow
startAppListening({
  matcher: isAnyOf(userApi.endpoints.addUser.matchFulfilled),
  effect: async (action, listenerApi) => {
    // listenerApi.cancelActiveListeners();
    listenerApi.dispatch(startLoading());
    if (action.meta.arg.endpointName === 'addUser') {
      listenerApi.dispatch(
        userApi.endpoints.getUserInfo.initiate(action.payload.data.handle)
      );
    }
  },
});
