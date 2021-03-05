// Notre reducer global
import { combineReducers } from 'redux';
import app from './app';
import categories from './categories';
import products from './products';
import connection from './connection';
import user from './user';
// Import des reducers

const globalReducer = combineReducers({
  // ici chaque propriétés correspondra à un mini reducer
  app,
  categories,
  products,
  connection,
  user,
  //  reducer,
  //  reducer,
});

export default globalReducer;
