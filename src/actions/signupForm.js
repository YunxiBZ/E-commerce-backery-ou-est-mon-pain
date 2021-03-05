export const CHANGE_FIELD = 'CHANGE_FIELD';

export const HANDLE_SIGNUP = 'HANDLE_SIGNUP';

export const handleSignup = () => ({
  type: HANDLE_SIGNUP,

});

export const changeField = (payload) => ({
  type: CHANGE_FIELD,
  payload,
});
