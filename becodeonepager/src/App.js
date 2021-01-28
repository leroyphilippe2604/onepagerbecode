import React from 'react'
import logo from './logo.svg';
import './App.css';
import Dutch from "./Dutch";
import Content from "./content";
import Card from "./card";

const App = () => {
  return(
    <div className="App">
      <div className="flag">
        <Dutch/>
      </div>
        <Content/>
        <Card/>
    </div>
  );
}

export default App;
