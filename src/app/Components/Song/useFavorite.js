const setFavorite = (passedSong, setSong) => {
  if (passedSong.isFavorite === true) {
    setSong(
      {
        // Song: {
        Song_ID: passedSong.Song_ID,
        Artist: passedSong.Artist,
        Song_Name: passedSong.Song_Name,
        Album_Cover: passedSong.Album_Cover,
        isFavorite: false,
        // },
        // Comments: passedSong.Comments || [],
      },
    );
  } else {
    setSong(
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
    );
  }
};

export default setFavorite;
