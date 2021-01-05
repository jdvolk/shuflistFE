const usePostRequest = async (url, payload) => {
  try {
    const response = await fetch(`${url}searchResults`, {
      method: 'post',
      body: JSON.stringify(payload),
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export default usePostRequest;

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
