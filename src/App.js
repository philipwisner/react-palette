import React from 'react';
import image from './album.png';
import { usePalette } from "react-palette";
import './App.css';

function App() {
  //Add image upload and set that as image
  const { data, loading, error } = usePalette(image);
  console.log(data);
  var colorTiles = Object.keys(data).map(function(key) {
    return <div className="colorTile" style={{backgroundColor: data[key]}}>{key} {data[key]}</div>;
  });

  return (
    <div className="App">
      <div>
        <img src={image} alt="source"/>
      </div>
      <div class="colorTiles">{colorTiles}</div>
    </div>
  );
}

export default App;
