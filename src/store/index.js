import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';
import products from 'src/middlewares/products';
// import middlewares

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(products),
  // other store enhancers if any
));

export default store;
