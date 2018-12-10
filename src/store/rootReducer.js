import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import withSidebar from '../components/HigherOrderComponents/WithSidebar';

const rootReducer = combineReducers({
  routing: routerReducer,
  withSidebar,
});

export default rootReducer;
