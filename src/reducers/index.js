// Notre reducer global
import { combineReducers } from 'redux';
import app from './app';
import categories from './categories';
import products from './products';
import user from './user';
import signup from './signup';

// Import des reducers

const globalReducer = combineReducers({
  // ici chaque propriétés correspondra à un mini reducer
  app,
  categories,
  products,
  user,
  signup,
  //  reducer,
  //  reducer,
});

export default globalReducer;
