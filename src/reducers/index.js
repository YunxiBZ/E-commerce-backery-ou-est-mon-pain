// Notre reducer global
import { combineReducers } from 'redux';
import app from './app';
// Import des reducers

const globalReducer = combineReducers({
  // ici chaque propriétés correspondra à un mini reducer
  app,
  //  reducer,
  //  reducer,
});

export default globalReducer;
