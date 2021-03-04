// IMPORT DES ACTIONS
import { TOGGLE_NAVBAR } from 'src/actions/app';

// IMPORT DE LA DATA HOMEPAGE
import data from 'src/assets/data';

const initialState = {
  toggle: false,
  data,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_NAVBAR: {
      return {
        ...state,
        toggle: !state.toggle,
      };
    }
    default:
      return state;
  }
};
