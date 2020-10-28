import React from 'react';
import './App.css';
import { Switch, useHistory } from 'react-router-dom'

import Navigation from './app/Components/Navagation/Navigation'
// import SongSearch from './features/SongSearch/Song_Input'
// import SearchResults from './features/SongResults/SongResultsContainer'
// import Login from '../src/app/Components/Login/Login'
import Routes  from '../src/app/Routes/routes'

// import { selectSearchResults as searchResults } from './features/SongSearch/songInputSlice'
// import { selectIsLoggedIn as isLoggedIn } from './features/User/getUserSlice'

import {  useSelector, useDispatch } from "react-redux";

function App() {
  let history = useHistory()
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <div className="App">
    <section className="App-Container">
      <header className="App-header">
        <h1>Song Search</h1>
      </header>
        <Navigation history={history} />
      <section className="App-Body">
      <Switch>
        <Routes isLoggedIn={isLoggedIn} />
      </Switch>
      </section>
    </section>
    </div>
  );
}

export default App;
