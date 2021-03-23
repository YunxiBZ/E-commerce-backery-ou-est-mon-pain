import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const InputModifyProduct = ({
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
    <div className="modifyInput">

      <label
        htmlFor={inputId}
        className="modifyInput__label"
      >
        {placeholder}
      </label>

      <input
        id={inputId}
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

InputModifyProduct.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  changeField: PropTypes.func.isRequired,
};

InputModifyProduct.defaultProps = {
  value: '',
  type: 'text',
  className: '',
};

export default InputModifyProduct;
