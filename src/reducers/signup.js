import { CHANGE_FIELD, SIGNUP_SUCCESS, SIGNUP_FAILED } from 'src/actions/signup';

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
    default:
      return state;
  }
};

export default signup;
