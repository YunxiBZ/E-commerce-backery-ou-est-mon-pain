// Notre reducer global
import { combineReducers } from 'redux';
import app from './app';
import categories from './categories';
import products from './products';
import connection from './connection';
import signupForm from './signupForm';

// Import des reducers

const globalReducer = combineReducers({
  // ici chaque propriétés correspondra à un mini reducer
  app,
  categories,
  products,
  connection,
  signupForm,
  //  reducer,
  //  reducer,
});

export default globalReducer;
