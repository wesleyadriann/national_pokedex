import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  Row,
  Grid,
} from './style';

import {
  getAllPokemons,
} from '../../services/pokemons';
import {
  handlePokemons,
} from '../../store/actions/home';

import Pokemon from './Pokemon';

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.home.pokemons);

  useEffect(() => {
    getAllPokemons()
      .then((res) => {
        const pokemonsApi = res.results.map((pokemon) => {
          const id = pokemon.url.split('pokemon/').pop().replace(/\D/g, '');
          return { ...pokemon, id };
        });
        dispatch(handlePokemons(pokemonsApi));
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Grid>
          {
            pokemons.map((pokemon) => (
              <Pokemon
                key={pokemon.url}
                url={pokemon.url}
                name={pokemon.name}
                id={pokemon.id}
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
