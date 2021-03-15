import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import Category from './Category';

const Categories = ({ categories }) => (
  <div className="categories">
    {categories.map((category) => (
      <Category key={category.id} {...category} />
    ))}
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
