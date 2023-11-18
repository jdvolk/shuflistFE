import {
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
} from '@reduxjs/toolkit';

import type { AppDispatch } from '../storetypes';

export const createFetchDispatch = async (
  url: string,
  infoRelay: ActionCreatorWithPayload<any>,
  endAction: ActionCreatorWithoutPayload<any>,
  dispatch: AppDispatch
) => {
  try {
    const response = await fetch(url);
    const parsed = await response.json();
    dispatch(infoRelay(parsed));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(endAction());
    // return parsed;
  }
};
export const createPostRequest = async (url: string, payload: any) => {
  try {
    const response = await fetch(url, {
      method: 'post',
      body: JSON.stringify(payload),
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// export const postComment = async (comment) => {
// try {
//   const response = await fetch(`${url}Home/${comment.Post_ID}`, {
//     method: 'post',
//     body: JSON.stringify(comment),
//   });
//   console.log(response);
//   /*
//   // const parsed = await response.json();
//   // eslint-disable-next-line no-console
//   // console.log('parsed', parsed);
//   // dispatch(addComment(comment));
//   // console.log(response);
//   // eventually switch comment out for parsed when the api returns something back
//   */
// } catch (error) {
//   console.log(error);
// }

// try {
//   const response = await fetch(`${url}searchResults`, {
//     method: 'post',
//     body: JSON.stringify(post),
//   });
//   console.log(response);
// } catch (error) {
//   console.log(error);
// }
