import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../resources/logo.svg';

const REACT_VERSION = React.version;
class Home extends Component {
  render() {
    return (
    <div className="App">
    <div>React version: {REACT_VERSION}</div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div style={{overflow:'scroll'}}>
        </div>

      <h1>Project Home</h1>
      {/* Link to List.js */}
      <Link to={'./list'}>
        <button variant="raised">
            My List
        </button>
      </Link>
      <Link to={'./sex'}>
        <button variant="raised">
            Go to sex
        </button>
      </Link>
    </div>
    );
  }
}
export default Home;