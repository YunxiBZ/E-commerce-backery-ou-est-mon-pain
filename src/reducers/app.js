// IMPORT DES ACTIONS
import { TOGGLE_NAVBAR, TOGGLE_FOOTERLIST } from 'src/actions/app';

// IMPORT DE LA DATA HOMEPAGE
import data from 'src/assets/data';

const initialState = {
  toggle: false,
<<<<<<< HEAD
  toggleFooterlist: false,
=======
  data,
>>>>>>> 3730c1c2d94d9983e890d262281a83f5bb548a17
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
