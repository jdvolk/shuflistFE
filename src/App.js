import React from 'react';
import SongSearch from './features/SongSearch/Song_Input'
import SearchResults from './features/SongResults/SongResultsContainer'
import './App.css';

import { selectSearchResults as searchResults } from './features/SongSearch/songInputSlice'

function App() {
  return (
    <div className="App">
    <section className="App-Container">
      <header className="App-header">
        <h1>Song Search</h1>
      </header>
      <section className="App-Body">
        <SongSearch />
        { searchResults && <SearchResults />}
      </section>
    </section>
    </div>
  );
}

export default App;
