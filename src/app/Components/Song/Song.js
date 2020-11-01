/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './Song.css';
import { withRouter, Redirect } from 'react-router-dom';

// import { switchFavorite } from '../../../features/User/userPostsSlice';
import { addToFavorites, removeFromFavorites } from '../../../features/User/getUserSlice';
import { switchFavorite } from '../../../features/User/userPostsSlice';
// import { searchResults } from '../../../features/SongSearch/songInputSlice';

// import Emoji from '../Emoji/Emoji'

function Song(props) {
  const [passedSong, setSong] = useState(null);
  useEffect(() => {
    setSong(props.song);
  }, [props.song]);

  const dispatch = useDispatch();

  const setFavorite = () => {
    if (passedSong.song.isFavorite === 'true') {
      setSong(
        {
          id: passedSong.id,
          song: {
            Artist: passedSong.song.Artist,
            Song_Name: passedSong.song.Song_Name,
            Album_Cover: passedSong.song.Album_Cover,
            isFavorite: 'false',
          },
          comments: passedSong.comments || [],
        },
      );
    } else {
      setSong(
        {
          id: passedSong.id,
          song: {
            Artist: passedSong.song.Artist,
            Song_Name: passedSong.song.Song_Name,
            Album_Cover: passedSong.song.Album_Cover,
            isFavorite: 'true',
          },
          comments: passedSong.comments || [],
        },
      );
    }
  };

  const searchResultFavorite = () => {
    if (passedSong.song.isFavorite === 'false') {
      dispatch(addToFavorites(
        {
          id: passedSong.id,
          song: {
            Artist: passedSong.song.Artist,
            Song_Name: passedSong.song.Song_Name,
            Album_Cover: passedSong.song.Album_Cover,
            isFavorite: 'true',
          },
          comments: passedSong.comments || [],
        },
      ));
    } else {
      dispatch(removeFromFavorites(passedSong));
    }
  };

  const handleFavClick = () => {
    setFavorite(passedSong);
    if (props.location === 'search-result') {
      searchResultFavorite();
    } else {
      searchResultFavorite();
      dispatch(switchFavorite(passedSong));
    }
  };

  if (passedSong) {
    const songDetails = passedSong.song;
    return (
      <section className="song-container">
        <img
          className="album-cover"
          src={songDetails.Album_Cover}
          alt={`album cover for${songDetails.Song_Name}by${songDetails.Artist}`}
        />
        <section className="song-description">
          <h4>
            Song:
            {songDetails.Song_Name}
          </h4>
          <h4>
            Artist:
            {songDetails.Artist}
          </h4>
        </section>
        {props.location.pathname === '/SearchResults' && (
          <>
            <section className="choose-song">
              <section className="song x" label="x" />
              <section
                className="song check"
                label="check"
                // eslint-disable-next-line arrow-body-style
                onClick={() => {
                  props.history.push({
                    pathname: '/PostSong',
                    song: passedSong,
                  });
                }}
              />
            </section>
            <section
              className={`song ${songDetails.isFavorite}`}
              label="check"
              onClick={handleFavClick}
            />
            {/* <section className="song favorite" label="check" /> */}
            {/* <section className="song favorite" label="check"></section> */}
          </>
        )}
        {/* eslint-disable-next-line no-mixed-operators */}
        {props.location.pathname === '/' && (
          <section
            className={`song ${songDetails.isFavorite}`}
            label="check"
            onClick={handleFavClick}
          />
        )}
        {props.location.pathname === '/Favorites' && (
          <section
            className="song"
            label="check"
            onClick={handleFavClick}
          >
            <section className="song x" label="x" />
          </section>
        )}
      </section>
    );
  // eslint-disable-next-line no-else-return
  } else {
    return (
      <section>Loading...</section>
    );
  }
}

export default withRouter(Song);
