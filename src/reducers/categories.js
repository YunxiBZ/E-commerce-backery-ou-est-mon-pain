import { SAVE_CATEGORIES } from 'src/actions/categories';

export const initialState = [];

const categories = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_CATEGORIES:
      return [...action.categories];
    default:
      return state;
  }
};

export default categories;
