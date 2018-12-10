import types from './types';
import WithSidebarApi from './with-sidebar-api';

export const getTodoLists = () => (dispatch) => dispatch({
  type: types.FETCH_TODO_LISTS,
  payload: WithSidebarApi.getTodoLists()
});

export const setField = (payload) => (dispatch) => dispatch({
  type: types.SET_FIELD,
  payload
});

export const createTodoList = (payload) => (dispatch) => dispatch({
  type: types.CREATE_TODO_LIST,
  payload: WithSidebarApi.createTodoList(payload)
});
