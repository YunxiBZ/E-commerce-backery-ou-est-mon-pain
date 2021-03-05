import React from 'react';
import PropTypes from 'prop-types';
import Button from 'src/components/Button';
import SignupField from './SignupField';

const SignupForm = ({
  firstName,
  lastName,
  email,
  telephone,
  password,
  changeField,
  handleSubmit,
}) => (
  <form
    className="signupForm"
    type="submit"
    onSubmit={handleSubmit}
  >
    <SignupField
      name="firstName"
      placeholder="Votre prénom"
      onChange={changeField}
      value={firstName}
    />
    <SignupField
      name="lastName"
      placeholder="Votre nom de famille"
      onChange={changeField}
      value={lastName}
    />
    <SignupField
      name="email"
      placeholder="Adresse Email"
      type="email"
      onChange={changeField}
      value={email}
    />

    <SignupField
      name="telephone"
      placeholder="Numéro de téléphone"
      type="telephone"
      onChange={changeField}
      value={telephone}
    />

    <SignupField
      name="password"
      placeholder="Mot de passe"
      type="password"
      onChange={changeField}
      value={password}
    />
    <Button
      className="signupForm__submmit-btn"
      value="Inscrire"

    />
  </form>
);

SignupForm.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SignupForm;
