export const CHANGE_VALUE = 'CHANGE_VALUE';
export const SUBMIT_FORM = 'SUBMIT_FORM';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const loginFailed = () => ({
  type: LOGIN_FAILED,

});

export const loginSuccess = (
  email,
  firstName,
  lastName,
  logged,
  phoneNumber,
  token,
) => ({
  type: LOGIN_SUCCESS,
  email,
  firstName,
  lastName,
  logged,
  phoneNumber,
  token,
});

export const changeValue = (value, name) => ({
  type: CHANGE_VALUE,
  value,
  name,
});

export const submitForm = () => ({
  type: SUBMIT_FORM,
});
