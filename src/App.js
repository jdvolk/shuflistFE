/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Switch, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

// app imports
import Navigation from './app/Components/Navagation/Navigation';
import Routes from '../src/app/Routes/routes';

// UI
import logo2 from '../src/assets/shuflist_5.png';
import './App.css';

function App() {
  const history = useHistory();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div className="App">
      <section className="App-Container">
        <header className="App-header">
          <img src={logo2} alt="shufflist-logo" className="logo" />
        </header>
        {!isLoggedIn && <Navigation history={history} />}
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
