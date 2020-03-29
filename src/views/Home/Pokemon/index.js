import React, { useState, useEffect } from 'react';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';

import config from '../../../config';

import {
  CardContainer,
  Cardbody,
  Text,
  SpinnerContainer,
} from './style';

const Pokemon = ({ name, id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState({ name, id });

  useEffect(() => {

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
              <img src={config.POKEMON_IMAGE(id)} alt={pokemon.name} />
              <div>
                <Text>
                  {pokemon.name}
                </Text>
                <Text>
                  NDex:
                  {pokemon.id.padStart(3, '0')}
                </Text>
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
