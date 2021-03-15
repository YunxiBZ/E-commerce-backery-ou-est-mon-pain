import { connect } from 'react-redux';
import ContactForm from 'src/components/ContactForm';
import {
  submitContactForm,
  changeFieldForm,
} from 'src/actions/app';

const mapStateToProps = (state) => ({
  email: state.app.contactForm.email,
  firstName: state.app.contactForm.first_name,
  lastName: state.app.contactForm.last_name,
  phoneNumber: state.app.contactForm.phone_number,
  message: state.app.contactForm.message,
  success: state.app.contactForm.success,
});

const mapDispatchToProps = (dispatch) => ({
  submitForm: () => {
    dispatch(submitContactForm());
  },
  changeField: (name, value) => {
    dispatch(changeFieldForm(name, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
