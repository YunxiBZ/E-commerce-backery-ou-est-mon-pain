import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Button from 'src/components/Button';
import LoginField from './LoginField';

import './styles.scss';

const LoginForm = ({
  email,
  password,
  changeField,
}) => {
  const ok = 'ok';

  return (
    <div className="container">
      <form autoComplete="off" className="loginForm">
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
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
};

export default LoginForm;
