/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Song.css';
import { withRouter, Redirect } from 'react-router-dom';
import setFavorite from './useFavorite';
import searchResultFavorite from './useSearchFavorite';
import renderSearchResults from './render/SearchResults';
import renderPosts from './render/Posts';
import renderFavorites from './render/Favorites';
import renderDefault from './render/Default';
import renderPostSong from './render/PostSong';

// import { switchFavorite } from '../../../features/User/userPostsSlice';
import { addToFavorites, removeFromFavorites } from '../../../features/User/getUserSlice';
import { switchFavorite, postFavorite } from '../../../features/User/userPostsSlice';

// import { searchResults } from '../../../features/SongSearch/songInputSlice';

// import Emoji from '../Emoji/Emoji'

function Song(props) {
  const [passedSong, setSong] = useState(null);
  useEffect(() => {
    setSong(props.Song);
  }, [props.Song]);

  const dispatch = useDispatch();
  const userFavorites = useSelector((state) => state.user.userInfo.Favorites);

  const handleFavClick = () => {
    setFavorite(passedSong, setSong, dispatch);
    if (props.location === 'search-result') {
      searchResultFavorite(passedSong, addToFavorites, removeFromFavorites, dispatch);
      dispatch(switchFavorite(passedSong));
      postFavorite(passedSong);
    } else if (props.location.pathname === '/Favorites') {
      searchResultFavorite(passedSong, addToFavorites, removeFromFavorites, dispatch);
    } else {
      searchResultFavorite(passedSong, addToFavorites, removeFromFavorites, dispatch);
      postFavorite(passedSong);
    }
  };

  const checkFavorite = (songID) => {
    const isInFavorites = userFavorites.find((song) => song.Song_ID === songID);
    if (isInFavorites) setFavorite(passedSong, setSong);
  };

  if (passedSong) {
    const songDetails = passedSong;
    if (!songDetails.isFavorite) checkFavorite(songDetails.Song_ID);
    return (
      <>
        <section className="song-container">
          {/* TODO check if switch case will work  */}
          {renderDefault(songDetails)}
          {props.location.pathname === '/SearchResults' && (
            renderSearchResults(props, passedSong, songDetails, handleFavClick)
          )}
          {/* eslint-disable-next-line no-mixed-operators */}
          {props.location.pathname === '/' && (
            renderPosts(props, songDetails, handleFavClick)
          )}
          {props.location.pathname === '/Favorites' && (
            renderFavorites(passedSong, handleFavClick)
          )}
          {props.location.pathname === '/PostSong' && (
            renderPostSong(props.handlePostClick)
          )}
        </section>
      </>
    );
  // eslint-disable-next-line no-else-return
  } else {
    return (
      <section>Loading...</section>
    );
  }
}

export default withRouter(Song);
