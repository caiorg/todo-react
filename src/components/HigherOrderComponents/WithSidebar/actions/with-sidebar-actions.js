import types from './types';
import WithSidebarApi from './with-sidebar-api';

export const getTodoLists = () => (dispatch) => dispatch({
  type: types.FETCH_TODO_LISTS,
  payload: WithSidebarApi.getTodoLists()
});
