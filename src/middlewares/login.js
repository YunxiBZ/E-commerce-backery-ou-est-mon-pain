import axios from 'axios';
import { SUBMIT_FORM, loginSuccess, loginFailed } from 'src/actions/user';

const login = (store) => (next) => (action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case SUBMIT_FORM: {
      const userLogin = async () => {
        const state = store.getState();
        const baseUrl = process.env.REACT_APP_BASE_URL;
        const url = `${baseUrl}/login`;
        try {
          const response = await axios.post(url, {
            email: state.user.email,
            password: state.user.password,
          });
          if (response.statusText === 'OK') {
            const { email, logged, token } = response.data;
            const firstName = response.data.first_name;
            const lastName = response.data.last_name;
            const phoneNumber = response.data.phone_number;
            store.dispatch(loginSuccess(
              email,
              firstName,
              lastName,
              logged,
              phoneNumber,
              token,
            ));
          }
        }
        catch (error) {
          console.log('error', error);
          store.dispatch(loginFailed());
        }
      };
      userLogin();
      break;
    }
    default:
      next(action);
  }
};

export default login;
