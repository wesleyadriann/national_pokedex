import React from 'react';

import config from '../../../config';

import { CardContainer, Cardbody, Text } from './style';

const Pokemon = ({name, url, id}) => (
  <CardContainer>
    <Cardbody>
      <img src={config.POKEMON_IMAGE(id)} alt={name} />
      <div>
        <Text>
          {name}
        </Text>
        <Text>
          NDex: {id.padStart(3, '0')}
        </Text>
      </div>
    </Cardbody>
  </CardContainer>
);

export default Pokemon;
