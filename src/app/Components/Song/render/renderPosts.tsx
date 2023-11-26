/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { CommentBox } from '../../CommentBox/CommentBox';
import { UserHeader } from '../../UserHeader/UserHeader';

export const renderPosts = (
  props: any,
  post: any,
  songDetails: any,
  onClick: () => void
) => {
  return (
    <section className="song-post">
      <section
        className={`song favorite ${songDetails.isFavorite}`}
        // label="check"
        onClick={onClick}
      />
      <section className="poster-info">
        <div className="post-header">
          <div className="user">
            <UserHeader user={post.Author} />
            {/* <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User avatar" draggable="false" /> */}
            <span>{post.Author && post.Author.Author}</span>
          </div>
        </div>
        <p>{post.Body}</p>
      </section>
      <section className="post-comment-box">
        <CommentBox location="timeline" Post={post} />
      </section>
    </section>
  );
};
