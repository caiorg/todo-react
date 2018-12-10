import types from '../actions/types';

let initialState = {
  lists: {
    todosList: null
  }
};

const withSidebarReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case `${types.FETCH_TODO_LISTS}_FULFILLED`:
      return {...state, lists: {...state.lists, todosList: payload}};
    default:
      return state;
  }
};

export default withSidebarReducer;
