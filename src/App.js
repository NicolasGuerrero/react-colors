import React, { useState } from 'react';
import './App.css';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [colorList, setColorList] = useState(['yellow']);
  const createColor = (newColor) => {
    setColorList(oldList => [...oldList, newColor]);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes colorList={colorList} createColor={createColor}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
