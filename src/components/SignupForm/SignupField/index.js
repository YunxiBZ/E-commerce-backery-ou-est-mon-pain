import React from 'react';
import PropTypes from 'prop-types';

const SignupField = ({
  name,
  value,
  type,
  placeholder,
  onChange,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };
  const inputId = `field__${name}`;
  return (
    <div className="value.length > 0 ? 'field field--has-content' : 'field'">
      <input
        value={value}
        onChange={handleChange}
        id={inputId}
        type={type}
        className="field__input"
        placeholder={placeholder}
      />
      <label
        htmlFor={inputId}
        className="field__label"
      >
        {placeholder}
      </label>
    </div>
  );
};

SignupField.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

SignupField.defaultProps = {
  value: '',
  type: 'text',
};
export default SignupField;
