import useFindPost from './useFindPost';

const useFavoritesActions = (state, action) => {
  const foundPost = useFindPost(state, action);
  if (foundPost !== null) {
    foundPost.Song.isFavorite = !foundPost.Song.isFavorite;
  }
};

export default useFavoritesActions;
