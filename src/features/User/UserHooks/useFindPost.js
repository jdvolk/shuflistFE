/* eslint-disable arrow-body-style */
const useFindPost = (state, action) => {
  const found = state.posts
    .find((post) => post.Post_ID === action.payload.Post_ID)
  || null;
  return found;
};

export default useFindPost;
