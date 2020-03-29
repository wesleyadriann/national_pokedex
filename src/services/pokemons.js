import axios from 'axios';

import config from '../config';

export const getAllPokemons = (page = 0, perPage = 20) => (
  new Promise((resolve, reject) => {
    axios.get(`${config.ENDPOINT_POKEAPI}/?offset=${page * perPage}&limit=${perPage}`)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  })
);

export const getPokemon = (pokeId) => (
  new Promise((resolve, reject) => {
    axios.get(`${config.ENDPOINT_POKEAPI}/${pokeId}`)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  })
);
