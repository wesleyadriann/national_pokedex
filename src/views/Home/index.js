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

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.home.pokemons);

  useEffect(() => {
    getAllPokemons()
      .then((res) => {
        dispatch(handlePokemons(res.results));
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
              <div key={pokemon.url}>{pokemon.name}</div>
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
