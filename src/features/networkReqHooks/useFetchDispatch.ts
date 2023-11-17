import { ActionCreatorWithPayload, ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { AppDispatch } from "../../app/store";

export const useFetchDispatch = async (url: string, infoRelay: ActionCreatorWithPayload<any>, endAction: ActionCreatorWithoutPayload<any>, dispatch: AppDispatch) => {
  try {
    const response = await fetch(url);
    const parsed = await response.json();
    dispatch(infoRelay(parsed));
  } catch (error) {
    console.log(error);
  } finally  {
    dispatch(endAction());
    // return parsed;
  }
};



// export const getUser = () => async (dispatch) => {
//   dispatch(startLoading());
//   try {
//     const response = await fetch(`${url}User`);
//     const parsed = await response.json();
//     dispatch(login(parsed));
//   } catch (error) {
//     alert(error);
//   } finally {
//     dispatch(stopLoading());
//   }
// };

// export const fetchResults = (input) => async (dispatch) => {
//   dispatch(songInput(input));
//   try {
//     const response = await fetch(`${url}searchResults`);
//     const parsed = await response.json();
//     dispatch(searchResults(parsed));
//   } catch (error) {
//     alert(error);
//   } finally {
//     dispatch(resetInput());
//   }
// };

// export const getPosts = (id) => async (dispatch) => {
//   dispatch(startLoading());
//   try {
//     const response = await fetch(`${url}Home`);
//     // const response = await fetch('/user_posts.json');
//     const parsed = await response.json();
//     dispatch(fetchPosts(parsed));
//   } catch (error) {
//     // eslint-disable-next-line no-alert
//     alert(error);
//   } finally {
//     dispatch(stopLoading());
//   }
// };
