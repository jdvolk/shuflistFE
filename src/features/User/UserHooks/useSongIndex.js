/* eslint-disable arrow-body-style */
const useSongIndex = (state, action) => {
  return state.userInfo.Favorites
    .findIndex((song) => {
      return song.Song_ID === action.payload.Song_ID;
    });
};

export default useSongIndex;
