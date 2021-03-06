import axios from 'axios';
import { HANDLE_SIGNUP, signupSuccess, signupFailed } from 'src/actions/signup';

const signup = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_SIGNUP: {
      const userSignup = async () => {
        const state = store.getState();
        const baseUrl = process.env.REACT_APP_BASE_URL;
        const url = `${baseUrl}/signup`;
        console.log(state);
        try {
          const response = await axios.post(url, {
            email: state.signup.email,
            password: state.signup.password,
            passwordConfirm: state.signup.passwordConfirm,
            first_name: state.signup.first_name,
            last_name: state.signup.last_name,
            phone_number: state.signup.phone_number,
          });
          console.log(response);
          if (response.status === 201) {
            store.dispatch(signupSuccess(state.signup.email));
          }
        }
        catch (error) {
          store.dispatch(signupFailed());
        }
      };
      userSignup();
      break;
    }
    default:
      next(action);
  }
};

export default signup;
