import React, { Component } from 'react';
import './App.css';
import Houses from './components/houses';

class App extends Component {
  render() {
    return (
      <div>
        <div className= "App-header">
          The Citadel
        </div>
        <input/> <button className='search'>search</button>
        <Houses/>
      </div>
    );
  }
}

export default App;
