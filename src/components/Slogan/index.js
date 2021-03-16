import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Slogan = ({ slogan }) => (
  <h1 className="slogan">{slogan.toUpperCase()}</h1>
);

Slogan.propTypes = {
  slogan: PropTypes.string.isRequired,
};
export default Slogan;
