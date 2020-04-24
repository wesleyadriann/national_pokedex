import React from 'react';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';

import {
  CardContainer,
  Cardbody,
  Text,
  SpinnerContainer,
  TypeBadge,
} from './style';

const Pokemon = ({ pokemon, isLoading }) => {
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
  pokemon: PropTypes.objectOf(PropTypes.any),
  isLoading: PropTypes.bool,
};

Pokemon.defaultProps = {
  pokemon: {},
  isLoading: false,
};

export default Pokemon;
