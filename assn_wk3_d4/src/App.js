import React, { Component } from 'react';
import data from './data/data.js';
import './App.css';
import DirectoryCard from './Components/DirectoryCard.js';

class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <div className="App">
        <DirectoryCard />
      </div>
    );
  }


}

export default App;
