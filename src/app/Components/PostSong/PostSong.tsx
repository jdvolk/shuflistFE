import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

// app imports
import { SongRender } from '../Song/Song';
import { addPosts, createPost } from '../../Store/User/userPostsSlice';
import { resetSearch } from '../../Store/SongSearch/songInputSlice';

// UI
import './PostSong.css';
import { Song, Song as SongType } from '../../Store/storetypes';
import { selectUser } from '../../Store/User/getUserSlice';

interface PostSongProps {
  song: Song;
}

export const PostSong = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const song = state;

  // component state
  const [userSumbitted, setUserSubmitted] = useState(false);

  const User = useSelector(selectUser);
  const { displayName, id } = User.userInfo;

  const navigate = useNavigate();
  // const [validation, setValidation] = useState(false);
  const addBody = (input: any) => {
    return {
      Post_ID: Math.floor(Math.random() * 100),
      Song: {
        ...song,
      },
      Body: input,
      Author: { Author: displayName, Author_Id: id },
      Comments: [],
    };
  };
  const handlePostClick = async (input: any) => {
    const payload = addBody(input);
    dispatch(addPosts(payload));
    await createPost(payload);
    dispatch(resetSearch());
    setUserSubmitted(true);
    navigate('/');
    // setValidation(true);
  };

  return (
    <section className="post-form">
      <SongRender song={song} handlePostClick={handlePostClick} />
      <section className="song-search-container">
        {/* {userSumbitted && navigate("/") } */}
      </section>
    </section>
  );
};
