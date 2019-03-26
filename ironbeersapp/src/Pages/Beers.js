import React, { Component } from 'react';
import beerService from '../services/beerService';
import BeerCard from '../components/BeerCard';
class Beers extends Component {

  state = {
    data: []
  }

  componentDidMount() {
    this.getBeerList();
  }

  getBeerList = () => {
    beerService.getAll()
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

export default Beers;