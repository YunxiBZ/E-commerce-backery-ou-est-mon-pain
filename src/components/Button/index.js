import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Button = ({ value }) => {
  const test = 'cool';

  return (
    <button
      className="button"
      type="button"
    >
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string,
};

Button.defaultProps = {
  value: 'Envoyer',
};

export default Button;
