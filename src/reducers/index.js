// Notre reducer global
import { combineReducers } from 'redux';
import app from './app';
import products from './products';
// Import des reducers

const globalReducer = combineReducers({
  // ici chaque propriétés correspondra à un mini reducer
  app,
  products,
  //  reducer,
  //  reducer,
});

export default globalReducer;
