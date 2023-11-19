import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

// app imports
import {
  addToFavorites,
  removeFromFavorites,
} from '../../Store/User/getUserSlice';
import { switchFavorite, postFavorite } from '../../Store/User/userPostsSlice';

// render methods
import { renderSearchResults } from './render/SearchResults';
import { renderPosts } from './render/Posts';
import { renderFavorites } from './render/Favorites';
import { renderDefault } from './render/Default';
import { renderPostSong } from './render/PostSong';

// UI
import './Song.css';

// custom hooks
import { setFavorite } from './useFavorite';
import { searchResultFavorite } from './useSearchFavorite';
import { RootState, Song, useAppDispatch } from '../../Store/storetypes';

export const SongRender = (props: any) => {
  const location = useLocation();
  // component state
  const [passedSong, setSong] = useState<Song>();
  // eslint-disable-next-line @typescript-eslint/no-shadow, react/destructuring-assignment
  const { Song } = props;

  useEffect(() => {
    setSong(Song);
  }, [Song]);

  const dispatch = useAppDispatch();
  const userFavorites = useSelector(
    (state: RootState) => state.user.userInfo.Favorites
  );

  const { pathname } = location;
  const handleFavClick = () => {
    setFavorite(
      passedSong,
      setSong
      // dispatch
    );
    // if (props.location.pathname === '/SearchResult' && passedSong) {
    //   searchResultFavorite(passedSong, addToFavorites, removeFromFavorites, dispatch);
    //   dispatch(switchFavorite(passedSong));
    //   postFavorite(passedSong);
    if (location.pathname === '/Favorites') {
      searchResultFavorite(
        passedSong,
        addToFavorites,
        removeFromFavorites,
        dispatch
      );
      // } else {
      //   searchResultFavorite(passedSong, addToFavorites, removeFromFavorites, dispatch);
      //   postFavorite(passedSong);
    }
  };

  const checkFavorite = (songID: number) => {
    const isInFavorites = userFavorites.find((song) => song.Song_ID === songID);
    if (isInFavorites) setFavorite(passedSong, setSong);
  };

  if (passedSong) {
    const songDetails = passedSong;
    if (!songDetails.isFavorite) checkFavorite(songDetails.Song_ID);
    return (
      <section className="song-container">
        {renderDefault(songDetails)}
        {pathname === '/SearchResults' &&
          renderSearchResults(props, passedSong, songDetails, handleFavClick)}
        {pathname === '/' && renderPosts(props, songDetails, handleFavClick)}
        {pathname === '/Favorites' &&
          renderFavorites(passedSong, handleFavClick)}
        {/* {pathname === '/PostSong' && renderPostSong(props.handlePostClick)} */}
      </section>
    );
    // eslint-disable-next-line no-else-return
  } else {
    return <section>Loading...</section>;
  }
};
