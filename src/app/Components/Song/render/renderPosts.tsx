/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Post, Song } from '../../../Store/storetypes';
import { Comments } from '../../Comments/Comments';
import { FavoriteIcon } from '../../Icons/index';
import { UserHeader } from '../../UserHeader/UserHeader';

export const renderPosts = (
  post: Post,
  onClick: () => void,
  defaultRender: () => JSX.Element,
  song?: Song
) => {
  const { Author, Body } = post;
  return (
    <section className="song-post">
      <section className="poster-info">
        <div className="post-header">
          <div className="user">
            <UserHeader user={Author} />
          </div>
        </div>
        <p>{Body}</p>
      </section>
      {defaultRender()}
      <FavoriteIcon onClick={onClick} isActive={song?.isFavorite} />
      {/* {post.Comments && <Comments comments={post.Comments} post={post} />} */}
    </section>
  );
};
