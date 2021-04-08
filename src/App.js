import React,{useState} from 'react';
import './style/app.scss';

import Player from './components/player';
import Song from './components/song';
import Library from './components/library';

import data from './util';

function App() {
  //State 
  const [songs, setSongs] = useState(data());
  const [currentSong,setCurrentSong] = useState(songs[0]);
  const [isplaying,setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={ currentSong }/>
      <Player setIsPlaying={ setIsPlaying } isplaying={ isplaying } currentSong={currentSong}/>
      <Library songs={songs}/>
    </div>
  );
}

export default App;
