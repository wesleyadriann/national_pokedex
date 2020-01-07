import actionsTypes from '../../actionsTypes/home';

const INITIAL_STATE = {
  pokemons: [],
};

const home = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.HANDLEPOKEMONS:
      return {
        ...state,
        pokemons: action.pokemons,
      };
    default:
      return state;
  }
};

export default home;
