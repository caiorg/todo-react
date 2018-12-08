import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import errorMiddleware from '../middleware/error';

const routingMiddleware = routerMiddleware(browserHistory);

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,    
    applyMiddleware(
      errorMiddleware,
      promiseMiddleware(),
      thunk,
      routingMiddleware
    )    
  );
}
