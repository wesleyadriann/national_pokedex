import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  Row,
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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
      });
  }, []);

  return (
    <Container>
      <Row>
        {
          pokemons.map((pokemon) => (
            <div key={pokemon.url}>{pokemon.name}</div>
          ))
        }
      </Row>
    </Container>
  );
};

export default Home;
