import axios from 'axios';
import {
  SUBMIT_FORM, loginSuccess, loginFailed, fetchOrderList,
} from 'src/actions/user';

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
          console.trace(response);
          // si réussite on dispatch l'action loginSuccess avec la data reçu en response
          if (response.statusText === 'OK') {
            const {
              email,
              logged,
              token,
              role,
            } = response.data;
            const firstName = response.data.first_name;
            const lastName = response.data.last_name;
            const phoneNumber = response.data.phone_number;

            // Store user infos in localStorage
            // 1.prepare the right data format => the value = JSON.stringify(data)
            // 2.with commande => localStorage.setItem('name of key', the value )
            const userData = {
              email,
              firstName,
              lastName,
              logged,
              phoneNumber,
              token,
              role,
            };
            // console.log(userData);
            localStorage.setItem('userData', JSON.stringify(userData));
            store.dispatch(loginSuccess(
              userData,
            ));
            store.dispatch(fetchOrderList(token));
          }
        }
        catch (error) {
          // Sinon on dispatch l'action loginFailed
          // console.log('error', error);
          store.dispatch(loginFailed(error.response.data.error));
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
