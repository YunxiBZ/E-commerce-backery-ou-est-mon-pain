import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const LoginField = ({
  name,
  type,
  placeholder,
  value,
  onChange,
}) => {
  const inputId = `field-${name}`;

  const handleChange = (event) => {
    onChange(event.target.value, name);
  };

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
        onChange={handleChange}
      />
    </div>
  );
};

LoginField.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

LoginField.defaultProps = {
  value: '',
  type: 'text',
};

export default LoginField;
