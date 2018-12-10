import { createStore, applyMiddleware, compose } from 'redux';
// import { browserHistory } from 'react-router';
// import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

// const routingMiddleware = routerMiddleware(browserHistory);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(
        promiseMiddleware(),
        thunk,
        // routingMiddleware,
        logger
      )
    )
  );
}
