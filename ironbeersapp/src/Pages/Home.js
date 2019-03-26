import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div>
          <Link to={'/beers'}><img src="/images/beers.png" /></Link>
          <h1>All Beers</h1>
          <Link to={'/random-beer'}><img src="/images/random.png" /></Link>
          <h1>Random Beer</h1>
        </div>
         
     
    );
  }
}

export default Home;