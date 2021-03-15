import axios from 'axios';
import {
  SUBMIT_CONTACT_FORM,
  contactFormSuccess,
} from 'src/actions/app';

const contactForm = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_CONTACT_FORM: {
      const submitForm = async () => {
        const state = store.getState();
        const baseUrl = process.env.REACT_APP_BASE_URL;
        const url = `${baseUrl}/contact`;
        try {
          const response = await axios.post(url, {
            email: state.app.contactForm.email,
            first_name: state.app.contactForm.first_name,
            last_name: state.app.contactForm.last_name,
            phone_number: state.app.contactForm.phone_number,
            message: state.app.contactForm.message,
          });
          if (response.statusText === 'OK') {
            store.dispatch(contactFormSuccess());
          }
        }
        catch (error) {
          console.log(error, 'error');
        }
      };
      submitForm();
      break;
    }
    default:
      next(action);
  }
};

export default contactForm;
