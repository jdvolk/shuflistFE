/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Route } from 'react-router-dom';

import SongSearch from '../../features/SongSearch/Song_Input';
import PostSong from '../../features/PostSong/PostSong';
import SearchResults from './SongResults/SongResultsContainer';
import Login from './Login/Login';
import HomePage from './HomePage/HomePage';
import Favorites from './Favorites/Favorites';

function Routes(props) {
  const { isLoggedIn } = props;
  return (
    <>
      <Route
        exact path="/PostSong"
        render={() => {
          return (<PostSong />);
        }}
      >
      </Route>
      <Route
        exact path="/Favorites"
        render={() => {
          return (
            <Favorites
              location="favorites"
            />
          );
        }}
      >
      </Route>
      <Route
        exact path="/Home"
        render={() => {
          return (<HomePage isLoggedIn={isLoggedIn} location="home-page" />);
        }}
      >
      </Route>
      <Route
        exact path="/Login"
        render={() => {
          return (<Login />);
        }}
      >
      </Route>
      <Route
        exact path="/Search"
        render={() => {
          return (<SongSearch />);
        }}
      >
      </Route>
      <Route
        exact path="/SearchResults"
        render={() => {
          return (<SearchResults location="search-result" />);
        }}
      >
      </Route>
      {/* { !isLoggedIn && <Login />}
      { isLoggedIn && <SongSearch /> }
      { searchResults && <SearchResults />} */}
      <Route
        exact path="/"
        render={() => {
          return (
            <HomePage isLoggedIn={isLoggedIn} location="home-page" />
          );
        }}
      >
      </Route>
    </>
  );
}

export default Routes;
