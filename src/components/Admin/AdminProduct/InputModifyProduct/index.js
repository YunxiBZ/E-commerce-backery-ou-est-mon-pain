import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const InputModifyProduct = ({
  name,
  type,
  placeholder,
  value,
  className,
}) => {
  const inputId = `field-${name}`;

  return (
    <div className="modifyInput">

      <label
        htmlFor={inputId}
        className="modifyInput__label"
      >
        {placeholder}
      </label>

      <input
        value={value}
        type={type}
        className={className}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

InputModifyProduct.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
};

InputModifyProduct.defaultProps = {
  value: '',
  type: 'text',
  className: '',
};

export default InputModifyProduct;
