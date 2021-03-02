import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';
// import middlewares

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(/*midleware, middleware, middlewares*/),
  // other store enhancers if any
));

export default store;
