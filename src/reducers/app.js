// IMPORT DES ACTIONS
import {
  TOGGLE_NAVBAR,
  TOGGLE_FOOTERLIST,
  CHANGE_FIELD_FORM,
  CONTACT_FORM_SUCCESS,
} from 'src/actions/app';

// IMPORT DE LA DATA HOMEPAGE
import data from 'src/assets/data';

const initialState = {
  toggle: false,
  toggleFooterlist: false,
  data,
  contactForm: {
    email: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    message: '',
    success: false,
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_NAVBAR: {
      return {
        ...state,
        toggle: !state.toggle,
      };
    }
    case TOGGLE_FOOTERLIST: {
      return {
        ...state,
        toggleFooterlist: !state.toggleFooterlist,
      };
    }
    case CHANGE_FIELD_FORM: {
      console.log(action);
      return {
        ...state,
        contactForm: {
          ...state.contactForm,
          [action.name]: action.value,
        },
      };
    }
    case CONTACT_FORM_SUCCESS: {
      return {
        ...state,
        contactForm: {
          ...initialState.contactForm,
          success: true,
        },
      };
    }
    default:
      return state;
  }
};
