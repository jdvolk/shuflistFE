/* eslint-disable arrow-body-style */
import React from 'react';
import { useSelector } from 'react-redux';

import './TimeLine.css';
import Song from '../Song/Song';

function TimeLine() {
  const userTimeLine = useSelector((state) => state.posts.posts);

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  let posts;
  if (isLoggedIn && userTimeLine) {
    posts = userTimeLine.map((song) => {
      return (
        <section
          key={Math.random()}
        >
          <Song
            albumCover={song.song.Album_Cover}
            artist={song.song.Artist}
            title={song.song.Song_Name}
            isSearchResult="false"
            isFavorite={song.song.isFavorite}
            id={song.id}
            song={song}
          />
        </section>
      );
    });
  }

  return (
    <section>
      {posts || null }
    </section>
  );
}

export default TimeLine;
