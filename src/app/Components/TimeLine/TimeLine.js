/* eslint-disable arrow-body-style */
import React from 'react';
import { useSelector } from 'react-redux';

// app imports
import Song from '../Song/Song';
import Comments from '../Comments/Comments';

// UI
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
  // use selectors instead of prop drilling

  return (
    <section>
      {posts || null }
    </section>
  );
}

export default TimeLine;
