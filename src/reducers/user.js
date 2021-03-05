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
    default:
      return state;
  }
};

export default user;
