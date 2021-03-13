import { connect } from 'react-redux';
import SignupForm from 'src/components/SignupForm';
import { changeField, handleSignup } from 'src/actions/signup';

const mapStateToProps = (state) => ({
  firstName: state.signup.first_name,
  lastName: state.signup.last_name,
  email: state.signup.email,
  telephone: state.signup.phone_number,
  password: state.signup.password,
  passwordComfirm: state.signup.passwordConfirm,
  error: state.signup.error,
  signupSuccess: state.signup.signupSuccess,
  signedUp: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    const data = { [name]: value };
    const action = changeField(data);
    dispatch(action);
  },
  handleSignup: () => {
    const action = handleSignup();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
