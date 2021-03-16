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
export const MODIF__USER__SUCCESS = 'MODIF__USER__SUCCESS';
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
export const FETCH_LIST_FAILED = 'FETCH_LIST_FAILED';

export const fetchListFailed = (error) => ({
  type: FETCH_LIST_FAILED,
  error,
});

export const fetchListSuccess = (orderList) => ({
  type: FETCH_LIST_SUCCESS,
  orderList,
});

export const FETCH_ORDER_LIST = 'FETCH_ORDER_LIST';

export const fetchOrderList = (token) => ({
  type: FETCH_ORDER_LIST,
  token,
});

export const loginFailed = (message) => ({
  type: LOGIN_FAILED,
  error: message,
});

export const modifUserSucess = (
  email,
  firstName,
  lastName,
  phoneNumber,
) => ({
  type: MODIF__USER__SUCCESS,
  email,
  firstName,
  lastName,
  phoneNumber,
});

export const loginSuccess = (
  userData,
) => ({
  type: LOGIN_SUCCESS,
  userData,
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
