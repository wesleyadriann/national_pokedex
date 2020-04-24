import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  Row,
  Grid,
} from './style';

import {
  getAllPokemons, getPokemon,
} from '../../services/pokemons';
import {
  handlePokemons,
} from '../../store/actions/home';

import Pokemon from './Pokemon';

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.home.pokemons);
  const isLoading = useSelector((state) => state.home.isLoading);

  const getPokemonsInformations = (pokemonsApi) => {
    const promisesArr = pokemonsApi.map((pokemon) => getPokemon(pokemon.id));

    Promise.all(promisesArr)
      .then((pokemonsInfo) => {
        dispatch(handlePokemons(pokemonsInfo));
      });
  };

  const getPokemons = () => {
    getAllPokemons()
      .then((res) => {
        const pokemonsApi = res.results.map((pokemon) => {
          const id = pokemon.url.split('pokemon/').pop().replace(/\D/g, '');
          return { ...pokemon, id };
        });
        getPokemonsInformations(pokemonsApi);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
  };

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  return (
    <Container>
      <Row>
        <Grid>
          {
            pokemons.map((pokemon, i) => (
              <Pokemon
                key={String(i)}
                pokemon={pokemon}
                isLoading={isLoading}
              />
            ))
          }
        </Grid>
      </Row>
      <Row>
        Pages
      </Row>
    </Container>
  );
};

export default Home;
