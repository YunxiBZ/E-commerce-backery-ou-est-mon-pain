// eslint-disable-next-line import/prefer-default-export
export const findProductById = (products = [], id) => products.find(
  (product) => product.id === id,
);
