import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const InputAddProduct = ({
  name,
  type,
  placeholder,
  value,
  className,
  changeField,
}) => {
  const inputId = `field-${name}`;
  const handleChange = (event) => {
    changeField(event.target.value, name);
  };

  return (
    <div className="productInput">

      <label
        htmlFor={inputId}
        className="productInput__label"
      >
        {placeholder}
      </label>

      <input
        value={value}
        type={type}
        className={className}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}

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
  changeField: PropTypes.func.isRequired,
};

InputAddProduct.defaultProps = {
  value: '',
  type: 'text',
  className: '',
};

export default InputAddProduct;
