import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import List from './pages/List';
import Sex from './pages/Sex';
import BottomNavBar from './components/Navigation/bottomNavBar/BottomNavBar'
import RegularAppBar from './components/AppBars/RegularAppBar';


class App extends Component {
  render() {
    const App = () => (
      <div>
        <RegularAppBar classes={{colorPrimary:'red'}} />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
          <Route path='/sex' component={Sex}/>
        </Switch>
        <BottomNavBar />
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;