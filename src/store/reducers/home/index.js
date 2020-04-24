import actionsTypes from '../../actionsTypes/home';

const INITIAL_STATE = {
  pokemons: [],
  isLoading: false,
  page: 0,
  totalPokemons: 0,
  pokemonsPerPage: 20,
};

const home = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.HANDLEPOKEMONS:
      return {
        ...state,
        pokemons: action.pokemons,
      };
    case actionsTypes.HANDLELOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case actionsTypes.HANDLEPAGECHANGE:
      return {
        ...state,
        page: action.page,
      };
    case actionsTypes.SETTOTALPOKEMONS:
      return {
        ...state,
        totalPokemons: action.total,
      };
    default:
      return state;
  }
};

export default home;
