import axios from 'axios';

import config from '../config';

export const getAllPokemons = () => (
  new Promise((resolve, reject) => {
    axios.get(`${config.ENDPOINT_POKEAPI}/?limit=965`)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  })
);
