export const TOGGLE_NAVBAR = 'TOGGLE_NAVBAR';
export const TOGGLE_FOOTERLIST = 'TOGGLE_FOOTERLIST';
export const SUBMIT_CONTACT_FORM = 'SUBMIT_CONTACT_FORM';
export const CHANGE_FIELD_FORM = 'CHANGE_FIELD_FORM';
export const CONTACT_FORM_SUCCESS = 'CONTACT_FORM_SUCCESS';

export const toggleFooterlist = () => ({
  type: TOGGLE_FOOTERLIST,
});

export const toggleNavbar = () => ({
  type: TOGGLE_NAVBAR,
});

export const submitContactForm = () => ({
  type: SUBMIT_CONTACT_FORM,
});

export const changeFieldForm = (name, value) => ({
  type: CHANGE_FIELD_FORM,
  name,
  value,
});

export const contactFormSuccess = () => ({
  type: CONTACT_FORM_SUCCESS,
});
