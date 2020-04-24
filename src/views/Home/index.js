import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  Row,
  Grid,
  Buttons,
  ButtonWithArrow,
  Arrow,
} from './style';

import {
  getAllPokemons, getPokemon,
} from '../../services/pokemons';
import {
  handlePokemons,
  handleLoading,
  handlePageChange,
  setTotalPokemons,
} from '../../store/actions/home';

import arrow from '../../assets/images/arrow.svg';

import Pokemon from './Pokemon';

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.home.pokemons);
  const isLoading = useSelector((state) => state.home.isLoading);
  const page = useSelector((state) => state.home.page);
  const totalPokemons = useSelector((state) => state.home.totalPokemons);
  const pokemonsPerPage = useSelector((state) => state.home.pokemonsPerPage);

  const getPokemonsInformations = (pokemonsApi) => {
    const promisesArr = pokemonsApi.map((pokemon) => getPokemon(pokemon.id));

    Promise.all(promisesArr)
      .then((pokemonsInfo) => {
        dispatch(handlePokemons(pokemonsInfo));
        dispatch(handleLoading(false));
      });
  };

  const getPokemons = (pageIndex = 0) => {
    dispatch(handleLoading(true));
    getAllPokemons(pageIndex, pokemonsPerPage)
      .then((res) => {
        const pokemonsApi = res.results.map((pokemon) => {
          const id = pokemon.url.split('pokemon/').pop().replace(/\D/g, '');
          return { ...pokemon, id };
        });
        dispatch(setTotalPokemons(res.count));
        getPokemonsInformations(pokemonsApi);
      })
      .catch((err) => {
        dispatch(handleLoading(false));
        console.log(err);
        console.log(err.response);
      });
  };

  const handlePage = (pageIndex) => {
    if (!(pageIndex < 0) || (pageIndex * pokemonsPerPage >= totalPokemons)) {
      dispatch(handlePageChange(pageIndex));
      getPokemons(pageIndex);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

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
        <Buttons>
          <ButtonWithArrow
            onClick={() => handlePage(page - 1)}
            disabled={page === 0}
          >
            <Arrow
              rigth
              src={arrow}
              disabled={page === 0}
            />
          </ButtonWithArrow>
          <ButtonWithArrow
            disabled={page * pokemonsPerPage >= totalPokemons}
            onClick={() => handlePage(page + 1)}
          >
            <Arrow
              src={arrow}
              disabled={page * pokemonsPerPage >= totalPokemons}
            />
          </ButtonWithArrow>
        </Buttons>
      </Row>
    </Container>
  );
};

export default Home;
