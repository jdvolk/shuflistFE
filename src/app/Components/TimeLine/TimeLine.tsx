import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

// app imports
import SongRender from '../Song/Song';
import { Comments } from '../Comments/Comments';

// UI
import './TimeLine.css';
import { getPosts, selectPosts } from '../../Store/User/userPostsSlice';
import {
  selectIsLoggedIn,
  selectUser,
} from '../../Store/User/getUserSlice';
import { useAppDispatch } from '../../Store/store';

function TimeLine(props: any) {
  const userTimeLine = useSelector(selectPosts);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userInfo = useSelector(selectUser).userInfo;
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getPosts(Number(userInfo.User_Id)));
      //  set up pollling or some sort of refresh here
    }
  }, []);
  let posts;
  console.log(userTimeLine);

  if (isLoggedIn && userTimeLine) {
    posts = userTimeLine.map((song) => {
      return (
        <section key={Math.random()}>
          <SongRender
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

  return <section>{posts || null}</section>;
}

export default TimeLine;
