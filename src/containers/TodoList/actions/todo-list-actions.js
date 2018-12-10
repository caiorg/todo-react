import types from './types';
import TodoListApi from './todo-list-api';

export const getTodoLists = () => (dispatch) => dispatch({
  type: types.FETCH_TODO_LISTS,
  payload: TodoListApi.getTodoLists()
});
