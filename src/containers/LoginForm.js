import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';
import { changeValue, submitForm } from 'src/actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    const action = changeValue(value, name);
    dispatch(action);
  },
  submitForm: () => {
    const action = submitForm();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
