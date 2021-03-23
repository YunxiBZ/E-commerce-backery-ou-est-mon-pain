import React from 'react';
import './styles.scss';

import PropTypes from 'prop-types';
import Category from './Category';

const Categories = ({ categories }) => (
  <div className="categories">
    <p className="categories__title">Nos catégories: </p>
    <div className="categories__items">
      {categories.map((category) => (
        <Category key={category.id} {...category} />
      ))}
    </div>
  </div>
);

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

Categories.defaultProps = {
  categories: null,
};

export default Categories;
