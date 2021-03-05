import { connect } from 'react-redux';
import SignupForm from 'src/components/SignupForm';
import { changeField, handleSignup } from 'src/actions/signupForm';

const mapStateToProps = (state) => ({
  firstName: state.signupForm.first_name,
  lastName: state.signupForm.last_name,
  email: state.signupForm.email,
  telephone: state.signupForm.phone_number,
  password: state.signupForm.password,
  passwordComfirm: state.signupForm.passwordComfirm,

});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    const data = { [name]: value };
    const action = changeField(data);
    dispatch(action);
  },
  handleSignup,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
