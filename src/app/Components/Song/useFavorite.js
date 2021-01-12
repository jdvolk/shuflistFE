// import { songInput } from "../../../features/SongSearch/songInputSlice";

const setFavorite = (passedSong, setSong) => {
  if (passedSong.isFavorite === true) {
    setSong(
      {
        // Song_ID: passedSong.Song_ID,
        // Artist: passedSong.Artist,
        // Song_Name: passedSong.Song_Name,
        // Album_Cover: passedSong.Album_Cover,
        // Release_Date: passedSong.Release_Date,
        // Type: passedSong.Type,
        ...passedSong,
        isFavorite: false,
        // },
        // Comments: passedpassedSong.Comments || [],
      },
    );
  } else {
    setSong(
      {
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
      },
    );
  }
};

export default setFavorite;
