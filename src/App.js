import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RenderingState from './RenderingState.js';
import Counter from './Counter.js';
import Poker from './Poker.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

            <RenderingState />
            <Counter />
            <Poker />
        
      </div>
    );
  }
}

export default App;