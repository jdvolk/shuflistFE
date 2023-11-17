/* eslint-disable arrow-body-style */
import { PayloadAction,} from "@reduxjs/toolkit";
import { Post, UserPostState } from "../userPostsSlice";
import { RootState } from "../../../app/store";

export const useFindPost = (state: RootState, action: PayloadAction<Post>) => {
  const found = state.posts.posts
    .find((post: Post) => post.Post_ID === action.payload.Post_ID)
  || null;
  return found;
};


