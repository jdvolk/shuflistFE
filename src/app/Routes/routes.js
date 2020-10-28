import React from 'react';
import { Route } from 'react-router-dom';

import SongSearch from '../../features/SongSearch/Song_Input';
import SearchResults from '../../features/SongResults/SongResultsContainer';
import Login from '../Components/Login/Login';
import HomePage from '../Components/HomePage/HomePage';


function Routes(props) {
  return (
    <>
      <Route
        exact path='/Home'
        render={() => {
          return (<HomePage isLoggedIn={props.isLoggedIn} />)
        }}
      ></Route>
      <Route
        exact path='/Login'
        render={() => {
          return (<Login />)
        }}
      ></Route>
      <Route
        exact path='/Search'
        render={() => {
          return (<SongSearch />)
        }}
      ></Route>
      <Route
        exact path='/SearchResults'
        render={() => {
          return (<SearchResults />)
        }}
      ></Route>
      {/* { !isLoggedIn && <Login />}
      { isLoggedIn && <SongSearch /> }
      { searchResults && <SearchResults />} */}
      <Route
        exact path='/'
        render={() => {
          return (
            <HomePage isLoggedIn={props.isLoggedIn} />
          )
        }}
      ></Route>
    </>
  )
}

export default Routes;


