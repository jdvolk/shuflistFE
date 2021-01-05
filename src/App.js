/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import { Switch, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import logo from '../src/assets/shuflist-Logo.svg';
import logo2 from '../src/assets/shuflist_5.png';

import Navigation from './app/Components/Navagation/Navigation';
// import SongSearch from './features/SongSearch/Song_Input'
// import SearchResults from './features/SongResults/SongResultsContainer'
// import Login from '../src/app/Components/Login/Login'
import Routes from '../src/app/Routes/routes';

// import { selectSearchResults as searchResults } from './features/SongSearch/songInputSlice'
// import { selectIsLoggedIn as isLoggedIn } from './features/User/getUserSlice'

function App() {
  const history = useHistory();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  // const imageUrl = '../src/assets/shuflist-Logo.svg';
  return (
    <div className="App">
      <section className="App-Container">
        <header className="App-header">
          <img src={logo2} alt="shufflist-logo" className="logo" />
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
