import React from 'react';
import './App.css';
import { Switch } from 'react-router-dom'

import Navigation from './app/Components/Navagation/Navigation'
// import SongSearch from './features/SongSearch/Song_Input'
// import SearchResults from './features/SongResults/SongResultsContainer'
// import Login from '../src/app/Components/Login/Login'
import Routes  from '../src/app/Routes/routes'

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
        <Navigation />
      <section className="App-Body">
      <Switch>
        <Routes />
      </Switch>
      </section>
    </section>
    </div>
  );
}

export default App;
