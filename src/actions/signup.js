export const CHANGE_FIELD = 'CHANGE_FIELD';

export const HANDLE_SIGNUP = 'HANDLE_SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILED = 'SIGNUP_FAILED';

export const signupFailed = () => ({
  type: SIGNUP_FAILED,
});

export const handleSignup = () => ({
  type: HANDLE_SIGNUP,
});

export const changeField = (payload) => ({
  type: CHANGE_FIELD,
  payload,
});

export const signupSuccess = (email) => ({
  type: SIGNUP_SUCCESS,
  email,
});
