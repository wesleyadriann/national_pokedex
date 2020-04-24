import actionsTypes from '../../actionsTypes/home';

export const handlePokemons = (pokemons) => (
  {
    type: actionsTypes.HANDLEPOKEMONS,
    pokemons,
  }
);

export const handleLoading = (isLoading) => (
  {
    type: actionsTypes.HANDLELOADING,
    isLoading,
  }
);

export const handlePageChange = (page) => (
  {
    type: actionsTypes.HANDLEPAGECHANGE,
    page,
  }
);
