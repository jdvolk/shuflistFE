/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Route } from 'react-router-dom';

import SongSearch from '../../features/SongSearch/Song_Input';
import SearchResults from '../../features/SongResults/SongResultsContainer';
import Login from '../Components/Login/Login';
import HomePage from '../Components/HomePage/HomePage';

function Routes(props) {
  const { isLoggedIn } = props;
  return (
    <>
      <Route
        exact path="/Home"
        render={() => {
          return (<HomePage isLoggedIn={isLoggedIn} />);
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
          return (<SearchResults />);
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
            <HomePage isLoggedIn={isLoggedIn} />
          );
        }}
      >
      </Route>
    </>
  );
}

export default Routes;
