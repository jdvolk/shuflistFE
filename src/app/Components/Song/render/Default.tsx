import defaultAlbum from '../../../../assets/default_album.jpg';

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
export const renderDefault = (songDetails: any) => {
  let date;
  if (songDetails?.Release_Date) date = songDetails.Release_Date;
  const albumArt = songDetails?.Album_Cover?.length
    ? songDetails?.Album_Cover
    : defaultAlbum;
  // const albumArt = songDetails.Album_Cover ?? defaultAlbum;
  return (
    <section className="song-default">
      <img
        className="album-cover"
        src={albumArt}
        alt={`album cover for${songDetails?.Song_Name}by${songDetails?.Artist}`}
        draggable="false"
      />
      <section className="song-description">
        {songDetails?.Song_Name && (
          <p>
            Song:
            {songDetails?.Song_Name}
          </p>
        )}
        {songDetails?.Artist && (
          <p>
            Artist:
            {songDetails.Artist}
          </p>
        )}
        {songDetails?.Type && (
          <p>
            Type:
            {songDetails.Type}
          </p>
        )}
        {date && (
          <p>
            Release Date:
            {date}
          </p>
        )}
      </section>
    </section>
  );
};
