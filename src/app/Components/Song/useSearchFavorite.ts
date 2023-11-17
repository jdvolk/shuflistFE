import { deleteFavorite } from '../../Store/User/userPostsSlice';
import { AppDispatch } from '../../Store/store';

export const searchResultFavorite = (
  passedSong: any,
  addToFavorites: any,
  removeFromFavorites: any,
  dispatch: AppDispatch
) => {
  if (passedSong.isFavorite === false) {
    dispatch(
      addToFavorites({
        // Song: {
        // Song_ID: passedSong.Song_ID,
        // Artist: passedSong.Artist,
        // Song_Name: passedSong.Song_Name,
        // Album_Cover: passedSong.Album_Cover,
        // Release_Date: passedSong.Release_Date,
        // Type: passedSong.Type,
        ...passedSong,
        isFavorite: true,
        // },
        // Comments: passedSong.Comments || [],
      })
    );
  } else {
    dispatch(removeFromFavorites(passedSong));
    deleteFavorite(passedSong);
  }
};
