import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const ContactField = ({
  type,
  placeholder,
  name,
  className,
  value,
  changeField,
}) => {
  const inputId = `field-${name}`;
  const handleChangeField = (event) => {
    changeField(name, event.target.value);
  };

  return (
    <div className={`field ${className}`}>
      <label
        htmlFor={inputId}
        className="field__description-label"
      >
        {placeholder}
      </label>

      <input
        id={inputId}
        type={type}
        className="field__input"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChangeField}
      />
    </div>
  );
};

ContactField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string.isRequired || PropTypes.number.isRequired,
  changeField: PropTypes.func.isRequired,
};

ContactField.defaultProps = {
  type: 'text',
  className: '',
  value: '',
};

export default ContactField;
