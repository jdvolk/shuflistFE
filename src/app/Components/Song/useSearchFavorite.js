import { deleteFavorite } from '../../../features/User/userPostsSlice';

const searchResultFavorite = (passedSong, addToFavorites, removeFromFavorites, dispatch) => {
  if (passedSong.isFavorite === false) {
    dispatch(addToFavorites(
      {
        // Song: {
        Song_ID: passedSong.Song_ID,
        Artist: passedSong.Artist,
        Song_Name: passedSong.Song_Name,
        Album_Cover: passedSong.Album_Cover,
        isFavorite: true,
        // },
        // Comments: passedSong.Comments || [],
      },
    ));
  } else {
    dispatch(removeFromFavorites(passedSong));
    deleteFavorite(passedSong);
  }
};

export default searchResultFavorite;
