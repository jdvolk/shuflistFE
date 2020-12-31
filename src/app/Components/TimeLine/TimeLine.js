/* eslint-disable arrow-body-style */
import React from 'react';
import { useSelector } from 'react-redux';
import Song from '../Song/Song';
import Comments from '../Comments/Comments';
import './TimeLine.css';

function TimeLine(props) {
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
            // eslint-disable-next-line react/prop-types
            location={props.location}
            Song={song.Song}
            Post={song}
            isSearchResult="false"
          />
          {song.Comments && <Comments Comments={song.Comments} />}
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
