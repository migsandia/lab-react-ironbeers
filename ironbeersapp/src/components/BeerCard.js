import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BeerCard extends Component {
  render() {
   const {data: {image_url, name, tagline, contributed_by}} = this.props;
      return (
          <li>
            <img src={image_url} />
            <h2>{name}</h2>
            <h2>{tagline}</h2>
            <h2>{contributed_by}</h2>
            {/* <button onClick={() => onDelete(_id)}>Delete</button> */}
         
          {/* <Link to={{
                  pathname: `/tortillas/${_id}/edit`
                  
            }}>Edit</Link> */}
          </li>
      
    );
  }
}

export default BeerCard;