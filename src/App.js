import React from 'react';
import album from './album.png';
import { usePalette } from "react-palette";
import './App.css';

function App() {
  const { data, loading, error } = usePalette(album);
  console.log(data);
  var colorTiles = Object.keys(data).map(function(key) {
    return <div className="colorTile" style={{backgroundColor: data[key]}}>{key} {data[key]}</div>;
  });

  return (
    <div className="App">
      <div>
        <img src={album} alt="source"/>
      </div>
      <div class="colorTiles">{colorTiles}</div>
    </div>
  );
}

export default App;
