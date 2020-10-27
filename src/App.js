import React from 'react';
import './App.css';

import SongSearch from './features/SongSearch/Song_Input'
import SearchResults from './features/SongResults/SongResultsContainer'
import Login from '../src/app/Components/Login/Login'

import { selectSearchResults as searchResults } from './features/SongSearch/songInputSlice'
import { selectIsLoggedIn as isLoggedIn } from './features/User/getUserSlice'

import {  useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <div className="App">
    <section className="App-Container">
      <header className="App-header">
        <h1>Song Search</h1>
      </header>
      <section className="App-Body">
        { !isLoggedIn && <Login />}
        { isLoggedIn && <SongSearch /> }
        { searchResults && <SearchResults />}
      </section>
    </section>
    </div>
  );
}

export default App;
