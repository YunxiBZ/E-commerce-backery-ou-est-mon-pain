import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ContactField = ({
  type,
  placeholder,
  name,
  className,
}) => {
  const inputId = `field-${name}`;

  return (
    <div className={`field ${className}`}>
      <label
        htmlFor={inputId}
        className="field__label"
      >
        {placeholder}
      </label>

      <input
        id={inputId}
        type={type}
        className="field__input"
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

ContactField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ContactField.defaultProps = {
  type: 'text',
  className: '',
};

export default ContactField;
