// Notre reducer global
import { combineReducers } from 'redux';
import app from './app';
import product from './product';
// Import des reducers

const globalReducer = combineReducers({
  // ici chaque propriétés correspondra à un mini reducer
  app,
  product,
  //  reducer,
  //  reducer,
});

export default globalReducer;
