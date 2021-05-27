import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';

function App() {
  const spotify = new SpotifyWebApi();
  spotify.setPromiseImplementation(0);
  // eslint-disable-next-line no-console
  spotify.getMyCurrentPlayingTrack().then((obj) => console.log(obj));
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code>jooo</code>
        </p>
      </header>
    </div>
  );
}

export default App;
