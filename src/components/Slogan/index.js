import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import ScrollToTop from 'src/hooks/ScrollToTop';

const Slogan = ({ slogan }) => {
  ScrollToTop();
  return (
    <h1 className="slogan">{slogan.toUpperCase()}</h1>
  );
};

Slogan.propTypes = {
  slogan: PropTypes.string.isRequired,
};
export default Slogan;
