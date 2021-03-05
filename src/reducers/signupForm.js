import { CHANGE_FIELD } from 'src/actions/signupForm';

const initialState = {
  email: 'test@gmail.com',
  password: 'test123',
  passwordConfirm: 'test123',
  first_name: 'Eddy',
  last_name: 'Jaja',
  phone_number: '0636235368',

};

const reducer = (state = initialState, action = {}) => {
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

export default reducer;
