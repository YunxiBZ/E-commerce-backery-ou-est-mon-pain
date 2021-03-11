export const CHANGE_VALUE_PRODUCT = 'CHANGE_VALUE_PRODUCT';

export const CHANGE_CATEGORIES_PRODUCT = 'CHANGE_CATEGORIES_PRODUCT';

export const changeValueProduct = (value, name) => ({
  type: CHANGE_VALUE_PRODUCT,
  value,
  name,
});

export const changeCategoriesProduct = (value, id) => ({
  type: CHANGE_CATEGORIES_PRODUCT,
  value,
  id,
});
