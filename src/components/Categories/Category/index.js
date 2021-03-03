import React from 'react';
import './styles.scss';

import { NavLink } from 'react-router-dom';

const Category = () => {
  const ok = 'true';

  return (
    <NavLink
      className="category"
      to="idk" // à changer
      exact
    >
      <img className="category__img" alt="category" src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
      <p className="category__title">Category name</p>
    </NavLink>
  );
};

export default Category;
