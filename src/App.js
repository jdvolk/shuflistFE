import React from 'react';
import SongSearch from './features/SongSearch/Song_Input'
import './App.css';

function App() {
  return (
    <div className="App">
    <section className="App-Container">
      <header className="App-header">
        <h1>Song Search</h1>
      </header>
      <section className="App-Body">
        <SongSearch />
      </section>
    </section>
    </div>
  );
}

export default App;
