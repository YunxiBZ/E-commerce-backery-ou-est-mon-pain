import { SIGNUP_SUCCESS } from 'src/actions/signup';

// IMPORT ACTIONS
import {
  CHANGE_VALUE,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  USER_LOGOUT,
} from 'src/actions/user';

const initialState = {
  email: '',
  password: '',
  infos: {
    firstName: '',
    lastName: '',
    logged: false,
    phoneNumber: '',
    token: '',
  },
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
      return {
        ...state,
        password: '',
        error: 'identifiants invalides',
      };
    }
    case USER_LOGOUT: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};

export default user;
