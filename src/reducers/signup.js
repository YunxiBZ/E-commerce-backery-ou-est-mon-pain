import { CHANGE_FIELD } from 'src/actions/signupForm';

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

    default:
      return state;
  }
};

export default signup;
