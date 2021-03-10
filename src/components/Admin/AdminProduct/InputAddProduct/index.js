import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const LoginField = ({
  name,
  type,
  placeholder,
  value,

}) => {
  const inputId = `field-${name}`;

  return (
    <div className="loginField">

      <label
        htmlFor={inputId}
        className="loginField__label"
      >
        {placeholder}
      </label>

      <input
        value={value}
        type={type}
        className="loginField__input"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

LoginField.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

LoginField.defaultProps = {
  value: '',
  type: 'text',
};

export default LoginField;
