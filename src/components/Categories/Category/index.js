import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const Category = ({ label, image }) => {
  const ok = 'true';

  return (
    <Link
      className="category"
      to={`/category/${label.toLowerCase()} `} // à changer=>changé par Yunxi :)
    >
      <img className="category__img" alt="category-name" src={image} /* Il faudra modifier les url dans categories *//>
      <p className="category__title">{label}</p>
    </Link>
  );
};

Category.propTypes = {
  label: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Category;
