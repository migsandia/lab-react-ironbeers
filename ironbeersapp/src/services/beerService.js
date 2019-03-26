import axios from 'axios';

class BeerService {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://ironbeer-api.herokuapp.com/beers',
    });
  }

  getById(id) {
    return this.api.get(`/single/${id}`)
      .then(({data}) => data)
  }
  getAll() {
    return this.api.get('/all')
      .then(({data}) => data)
  }
  getRandom() {
    return this.api.get('/random')
      .then(({data}) => data)
  }

}
const beerService = new BeerService();
export default beerService;