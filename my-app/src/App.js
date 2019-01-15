import React, { Component } from 'react';
import './App.css';
import MyTimer from './MyTimer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyTimer />
      </div>
    );
  }
}

export default App;