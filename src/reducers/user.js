import { SIGNUP_SUCCESS } from 'src/actions/signup';

// IMPORT ACTIONS
import {
  CHANGE_VALUE,
} from 'src/actions/user';

const initialState = {
  email: '',
  password: '',
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE: {
      return {
        ...state,
        [action.name]: action.value,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        email: action.email,
      };
    }

    default:
      return state;
  }
};

export default user;
