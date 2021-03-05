import { USER_LOGOUT } from 'src/actions/connection';

const initialState = {
  userName: 'Tommy',
  isLogged: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_LOGOUT:
      return {
        userName: '',
        isLogged: false,
      };
    default:
      return state;
  }
};

export default reducer;
