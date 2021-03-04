import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers';
import categories from 'src/middlewares/categories';
// import middlewares

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(categories),
  // other store enhancers if any
));

export default store;
