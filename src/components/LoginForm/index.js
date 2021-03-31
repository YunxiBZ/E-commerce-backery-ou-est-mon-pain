import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useHistory } from 'react-router-dom';

import Button from 'src/components/Button';
import LoginField from './LoginField';

import './styles.scss';

const LoginForm = ({
  email,
  password,
  changeField,
  submitForm,
  error,
  isLogged,
  signupSuccess,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm();
  };
  // hook useHistory for redirect
  const history = useHistory();
  setTimeout(() => {
    if (isLogged) {
      history.push('/');
    }
  }, 1000);

  // const ADMIN = 'admin';
  // const USER = 'user';

  // if (role === ADMIN) {
  //   return <Redirect to="/admin" />;
  // }
  // if (role === USER) {
  //   return <Redirect to="/account" />;
  // }

  return (
    <div className="container">
      <form autoComplete="off" className="loginForm" onSubmit={handleSubmit}>
        {error && (
          <div className="loginForm__error">{error}</div>
        )}
        {signupSuccess && (
          <div className="loginForm__message">
            Votre compte a bien été créé,
            veuillez entrer votre mot de passe pour vous connecter
          </div>
        )}
        <LoginField
          name="email"
          placeholder="email"
          type="email"
          value={email}
          onChange={changeField}
        />
        <LoginField
          name="password"
          placeholder="password"
          type="password"
          value={password}
          onChange={changeField}
        />
        <div className="loginForm__container">
          <NavLink
            to="/signup"
            exact
            className="loginForm__links"
          >
            Se créer un compte
          </NavLink>
          <NavLink
            to="?????" // à changer ofc
            exact
            className="loginForm__links"
          >
            Mot de passe oublié ?
          </NavLink>
          <Button value="Se connecter" className="loginForm__button" type="submit" />

        </div>
      </form>
      <div className="loginForm__imgContainer">
        <img className="loginForm__image" src="https://images-ext-1.discordapp.net/external/Z3ffqdLdw4LNC5rmWehL2Aoa4NYBPIZ5dDbh7vHmPfA/%3Fixid%3DMXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%253D%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D1350%26q%3D80/https/images.unsplash.com/photo-1550599112-0c21a831f6b9?width=885&height=590" alt="img de login" />
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  error: PropTypes.string,
  signupSuccess: PropTypes.bool,
  isLogged: PropTypes.bool.isRequired,
};

LoginForm.defaultProps = {
  error: '',
  signupSuccess: false,
};

export default LoginForm;
