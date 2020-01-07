import actionsTypes from '../../actionsTypes/home';

export const handlePokemons = (pokemons) => (
  {
    type: actionsTypes.HANDLEPOKEMONS,
    pokemons,
  }
);
