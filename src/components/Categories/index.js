import React from 'react';
import './styles.scss';
import Category from './Category';

const Categories = () => {
  const ok = 'ok';

  return ( // à dynamiser
    <div className="categories">
      <Category />
      <Category />
      <Category />
      <Category />
    </div>
  );
};

export default Categories;
