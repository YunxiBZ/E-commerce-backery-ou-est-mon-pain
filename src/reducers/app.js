// IMPORT DES ACTIONS
import { TOGGLE_NAVBAR, TOGGLE_FOOTERLIST } from 'src/actions/app';

const initialState = {
  toggle: false,
  toggleFooterlist: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_NAVBAR: {
      return {
        ...state,
        toggle: !state.toggle,
      };
    }
    case TOGGLE_FOOTERLIST: {
      return {
        ...state,
        toggleFooterlist: !state.toggleFooterlist,
      };
    }
    default:
      return state;
  }
};
