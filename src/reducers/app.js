// IMPORT DES ACTIONS
import { TOGGLE_NAVBAR } from 'src/actions/app';

const initialState = {
  toggle: false,
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
