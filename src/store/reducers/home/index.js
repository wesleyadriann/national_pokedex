import actionsTypes from '../../actionsTypes/home';

const INITIAL_STATE = {
  pokemons: [],
  isLoading: false,
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
    default:
      return state;
  }
};

export default home;
