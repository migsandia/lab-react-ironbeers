import React, { Component } from 'react';
import beerService from '../services/beerService';
import BeerCard from '../components/BeerCard';

class RandomBeers extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.getBeerRandom();
  }

  getBeerRandom = () => {
    beerService.getRandom()
      .then(data => {
        this.setState({
          data
        })
      })
      .catch(err => console.log(err));
  }



  render() {
    const {data} = this.state;
    console.log(data);
    return (
      <div>
        <ul>
          {data.map(beer => (
            <BeerCard
              key={beer._id}
              data={beer}
              onDelete={this.handleDelete}
              onEdit={this.handleEdit}
            />
          ))}
        </ul>
      </div>
    );
  }
}


export default RandomBeers;