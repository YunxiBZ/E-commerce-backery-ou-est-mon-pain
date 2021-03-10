import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const InputAddProduct = ({
  name,
  type,
  placeholder,
  value,
  className,

}) => {
  const inputId = `field-${name}`;

  return (
    <div className="ProductInput">

      <label
        htmlFor={inputId}
        className="ProductInput__label"
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

InputAddProduct.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
};

InputAddProduct.defaultProps = {
  value: '',
  type: 'text',
  className: '',
};

export default InputAddProduct;
