import React, { useState, useEffect } from 'react';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';

import { getPokemon } from '../../../services/pokemons';

import {
  CardContainer,
  Cardbody,
  Text,
  SpinnerContainer,
  TypeBadge,
} from './style';

const Pokemon = ({ name, id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState({ name, id });

  useEffect(() => {
    getPokemon(pokemon.id)
      .then((response) => {
        setPokemon(response);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(`Error to get pokemon ${pokemon.name}, error: ${err}`);
        setIsLoading(false);
      });
  }, []);

  return (
    <CardContainer>
      <Cardbody>
        {
          isLoading ? (
            <SpinnerContainer>
              <Spinner name="ball-scale-ripple" color="#212121" />
            </SpinnerContainer>
          ) : (
            <>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <div>
                <Text>
                  {pokemon.name}
                </Text>
                <Text size={13}>
                  nº:
                  {String(pokemon.id).padStart(3, '0')}
                </Text>
                {
                  pokemon.types.map(({ type }) => (
                    <TypeBadge
                      key={type.name}
                      type={type.name}
                    >
                      {type.name}
                    </TypeBadge>
                  ))
                }
              </div>
            </>
          )
        }
      </Cardbody>
    </CardContainer>
  );
};

Pokemon.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};

Pokemon.defaultProps = {
  id: '',
  name: '',
};

export default Pokemon;
