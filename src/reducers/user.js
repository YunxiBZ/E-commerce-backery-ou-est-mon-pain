import { SIGNUP_SUCCESS } from 'src/actions/signup';

// IMPORT ACTIONS
import {
  CHANGE_VALUE,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
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
    case LOGIN_SUCCESS: {
      return {
        ...state,
        email: action.email,
        password: '',
        infos: {
          firstName: action.firstName,
          lastName: action.lastName,
          logged: action.logged,
          phoneNumber: action.phoneNumber,
          token: action.token,
        },
      };
    }
    case LOGIN_FAILED: {
      console.log(action);
      return {
        ...state,
        password: '',
        error: 'identifiants invalides',
      };
    }

    default:
      return state;
  }
};

export default user;
