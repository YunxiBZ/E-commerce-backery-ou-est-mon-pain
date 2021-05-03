import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Products from '../../src/components/Products';
import Product from '../../src/components/Products/Product';

describe('<Products />', () => {
  const productsData = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ];
  describe('structure', () => {
    const wrapper = shallow(<Products products={productsData} />);

    it('should have 1 div inside', () => {
      expect(wrapper.find('div')).to.have.lengthOf(1);
    });
  });

  describe('data component', () => {
    const wrapper = shallow(<Products products={productsData} />);

    it('should render 5 Product if 5 Product given', () => {
      expect(wrapper.find(Product)).to.have.lengthOf(5);
    });
  });
});
