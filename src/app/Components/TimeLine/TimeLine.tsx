import { useEffect } from 'react';
import { useSelector } from 'react-redux';

// app imports
import { SongRender } from '../Song/Song';
import { Comments } from '../Comments/Comments';

// UI
import './TimeLine.css';
import { getPosts, selectPosts } from '../../Store/User/userPostsSlice';
import { selectIsLoggedIn, selectUser } from '../../Store/User/getUserSlice';
import { useAppDispatch } from '../../Store/storetypes';

export const TimeLine = () => {
  const userTimeLine = useSelector(selectPosts);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { userInfo } = useSelector(selectUser);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getPosts(Number(userInfo.id)));
      //  set up pollling or some sort of refresh here
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, userInfo.id]);

  const renderPosts =
    isLoggedIn && userTimeLine
      ? userTimeLine?.map((item) => {
          return (
            <section key={Math.random()}>
              <SongRender
                song={item.Song}
                post={item}
                // isSearchResult={false}
              />
              {item.Comments && (
                <Comments comments={item.Comments} post={item} />
              )}
            </section>
          );
        })
      : null;

  return <section>{renderPosts}</section>;
};
