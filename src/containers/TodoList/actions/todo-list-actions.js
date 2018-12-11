import types from './types';
import TodoListApi from './todo-list-api';

export const getTodosListDetails = (code) => (dispatch) => dispatch({
  type: types.FETCH_TODOS_LIST_DETAILS,
  payload: TodoListApi.getTodosListDetails(code)
});

export const getTodos = (code) => (dispatch) => dispatch({
  type: types.FETCH_TODOS,
  payload: TodoListApi.getTodos(code)
});
