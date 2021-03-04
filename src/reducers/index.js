// Notre reducer global
import { combineReducers } from 'redux';
import app from './app';
import categories from './categories';
// Import des reducers

const globalReducer = combineReducers({
  // ici chaque propriétés correspondra à un mini reducer
  app,
  categories,
  //  reducer,
  //  reducer,
});

export default globalReducer;
