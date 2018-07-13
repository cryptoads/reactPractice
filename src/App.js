import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RenderingState from './RenderingState.js';
import Counter from './Counter.js';
import Poker from './Poker.js';
import Header from './Header.js';
import CallbackButton from './CallbackButton.js';

class App extends Component {

  buttonCallback(name){
    console.log(name)
  }

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
            <Header h1Text="This" />
            <Header h1Text="That" />
            <Header h1Text="The Other" />
            <CallbackButton callbackButton={this.buttonCallback.bind(this, "one")} text="callBack Click One" />
            <CallbackButton callbackButton={this.buttonCallback.bind(this, "two")} text="callBack Click Two" />
        
      </div>
    );
  }
}

export default App;
