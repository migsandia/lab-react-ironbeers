import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import Beers from './Pages/Beers';
import RandomBeers from './Pages/RandomBeers';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route path="/random-beer" component={RandomBeers} />
      </Switch>
    </Router>
    );
  }
}

export default App;
