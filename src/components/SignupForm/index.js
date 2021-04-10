import React from 'react';
import PropTypes from 'prop-types';
import Button from 'src/components/Button';
import { useHistory } from 'react-router-dom';
import SignupField from './SignupField';

import './styles.scss';

const SignupForm = ({
  firstName,
  lastName,
  email,
  telephone,
  password,
  passwordComfirm,
  changeField,
  handleBlur,
  handleSignup,
  error,
  signupSuccess,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSignup();
  };
  // hook useHistory for redirect
  const history = useHistory();
  setTimeout(() => {
    if (signupSuccess) {
      history.push('/login');
    }
  }, 1000);

  return (

    <form
      className="signupForm"
      type="submit"
      onSubmit={handleSubmit}
    >
      {error && (
        <div className="loginForm__error">{error}</div>
      )}
      <SignupField
        name="first_name"
        placeholder="Votre prénom"
        onChange={changeField}
        onBlur={handleBlur}
        value={firstName}
      />
      <SignupField
        name="last_name"
        placeholder="Votre nom de famille"
        onChange={changeField}
        onBlur={handleBlur}
        value={lastName}
      />
      <SignupField
        name="email"
        placeholder="Adresse Email"
        type="email"
        onChange={changeField}
        onBlur={handleBlur}
        value={email}
      />

      <SignupField
        name="phone_number"
        placeholder="Numéro de téléphone"
        type="telephone"
        onChange={changeField}
        onBlur={handleBlur}
        value={telephone}
      />

      <SignupField
        name="password"
        placeholder="Mot de passe"
        type="password"
        onChange={changeField}
        onBlur={handleBlur}
        value={password}
      />

      <SignupField
        name="passwordConfirm"
        placeholder="Confirmez votre mot de passe"
        type="password"
        onChange={changeField}
        onBlur={handleBlur}
        value={passwordComfirm}
      />
      <div className="signupForm__field--modifier">
        <Button
          className="signupForm__submit-btn"
          value="S'inscrire"
          type="submit"
        />
      </div>
    </form>
  );
};
SignupForm.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordComfirm: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSignup: PropTypes.func.isRequired,
  error: PropTypes.string,
  signupSuccess: PropTypes.bool,
};

SignupForm.defaultProps = {
  error: null,
  signupSuccess: false,
};
export default SignupForm;
