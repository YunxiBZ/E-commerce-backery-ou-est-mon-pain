import { expect, should } from 'chai';
import { findProductById } from '../../src/selectors/product';
/**
 *  execute method should for use it later
 */
should();

describe('selectors', () => {
  describe('findProductById', () => {
    const productsData = [
      { id: 5 },
      { id: 6 },
      { title: 'Baguette' },
    ];
    // test findProductById is a fonction
    it('must be a function', () => {
      findProductById.should.be.a('function');
    });

    // test findProductById return an object when id is matched
    it('must return a matching object', () => {
      findProductById(productsData, 6).should.be.an('object');
    });

    // test findProductById return an object when id isn't matched
    it('must return a undefined if not match', () => {
      // couldn't use should for undefined
      expect(findProductById(productsData, 'notfound')).to.be.undefined;
    });

    it('must not throw if id is undefined', () => {
      // method throw() need execute in a function
      expect(() => findProductById(productsData, undefined)).to.not.throw();
    });
  });
});
