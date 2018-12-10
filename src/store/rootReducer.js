import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import withSidebar from '../components/HigherOrderComponents/WithSidebar/reducers/with-sidebar-reducer';
import todoList from '../containers/TodoList/reducers/todo-list-reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  withSidebar,
  todoList,
});

export default rootReducer;
