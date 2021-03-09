export const CHANGE_VALUE = 'CHANGE_VALUE';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const USER_LOGOUT = 'USER_LOGOUT';
export const TOGGLE_FIRSTNAME = 'TOGGLE_FIRSTNAME';
export const TOGGLE_LASTNAME = 'TOGGLE_LASTNAME';
export const TOGGLE_PHONE = 'TOGGLE_PHONE';
export const TOGGLE_EMAIL = 'TOGGLE_EMAIL';
export const CHANGE_INFO = 'CHANGE_INFO';
export const SUBMIT_NEW_INFO = 'SUBMIT_NEW_INFO';

export const loginFailed = (message) => ({
  type: LOGIN_FAILED,
  error: message,
});

export const loginSuccess = (
  email,
  firstName,
  lastName,
  logged,
  phoneNumber,
  token,
  role,
) => ({
  type: LOGIN_SUCCESS,
  email,
  firstName,
  lastName,
  logged,
  phoneNumber,
  token,
  role,
});

export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  value,
  name,
});

export const submitForm = () => ({
  type: SUBMIT_FORM,
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});

export const toggleFirstName = () => ({
  type: TOGGLE_FIRSTNAME,
});

export const toggleLastName = () => ({
  type: TOGGLE_LASTNAME,
});

export const togglePhone = () => ({
  type: TOGGLE_PHONE,
});

export const toggleEmail = () => ({
  type: TOGGLE_EMAIL,
});

export const changeInfo = (value, fieldName) => ({
  type: CHANGE_INFO,
  value,
  fieldName,
});

export const submitNewInfo = () => ({
  type: SUBMIT_NEW_INFO,
});
