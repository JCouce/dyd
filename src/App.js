import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RegularAppBar from './components/AppBars/RegularAppBar';
import BottomNavBar from './components/Navigation/bottomNavBar/BottomNavBar';

const REACT_VERSION = React.version;

class App extends Component {
  render() {
    return (
      <div className="App">
       <div>React version: {REACT_VERSION}</div>
       <RegularAppBar classes={{colorPrimary:'red'}} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div style={{overflow:'scroll'}}>
          <BottomNavBar />
        </div>
      </div>
    );
  }
}

export default App;
