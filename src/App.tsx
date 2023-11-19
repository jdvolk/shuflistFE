/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// app imports
import Navigation from './app/Components/Navagation/Navigation';
import { RoutesInternal } from './app/Routes/routes';

// UI
import logo2 from './assets/shuflist_5.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="App-Container">
        <header className="App-header">
          <img src={logo2} alt="shufflist-logo" className="logo" />
        </header>
        <Navigation />
        <hr />
        <section className="App-Body">
          <RoutesInternal />
        </section>
      </section>
    </div>
  );
}

export default App;
