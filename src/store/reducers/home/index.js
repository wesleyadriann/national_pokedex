import actionsTypes from '../../actionsTypes/home';

const INITIAL_STATE = {
  pokemons: [],
  isLoading: false,
  page: 0,
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
    default:
      return state;
  }
};

export default home;
