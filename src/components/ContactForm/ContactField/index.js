import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Field = ({ type, placeholder, name }) => {
  const inputId = `field-${name}`;

  return (
    <div className="field">
      <input
        id={inputId}
        type={type}
        className="field__input"
        placeholder={placeholder}
        name={name}
      />

      <label
        htmlFor={inputId}
        className="field-label"
      >
        {placeholder}
      </label>
    </div>
  );
};

Field.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Field.defaultProps = {
  type: 'text',
};

export default Field;
