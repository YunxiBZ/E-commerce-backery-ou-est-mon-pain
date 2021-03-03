import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Slogan = ({ slogan }) => {
  const ok = 'ok';
  return (
    <h1 className="slogan">{slogan}</h1>
  );
};

Slogan.propTypes = {
  slogan: PropTypes.string.isRequired,
};
export default Slogan;
