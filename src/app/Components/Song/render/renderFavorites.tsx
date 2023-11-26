/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
export const renderFavorites = (passedSong: any, handleFavClick: any) => {
  if (passedSong.Song_ID) {
    return (
      <section>
        <section
          className="song"
          // label="check"
          onClick={handleFavClick}
        >
          <section
            className="song x"
            // label="x"
          />
        </section>
      </section>
    );
  }
  return null;
};
