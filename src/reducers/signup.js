import {
  CHANGE_FIELD, SIGNUP_SUCCESS, SIGNUP_FAILED, HANDLE_BLUR,
} from 'src/actions/signup';
import { USER_LOGOUT } from 'src/actions/user';

const initialState = {
  email: '',
  password: '',
  passwordConfirm: '',
  first_name: '',
  last_name: '',
  phone_number: '',
};

const signup = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        ...action.payload,
      };
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        email: '',
        password: '',
        passwordConfirm: '',
        first_name: '',
        last_name: '',
        phone_number: '',
        signupSuccess: true,
      };
    }
    case SIGNUP_FAILED: {
      return {
        ...state,
        password: '',
        passwordConfirm: '',
        error: action.message,
      };
    }
    case USER_LOGOUT: {
      return {
        ...state,
        signupSuccess: false,
      };
    }
    case HANDLE_BLUR: {
      return {
        ...state,
        error: `Il ne faut pas que ${action.placeholder} soit vide.`,
      };
    }
    default:
      return state;
  }
};

export default signup;
