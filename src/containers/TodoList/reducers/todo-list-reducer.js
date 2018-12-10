import types from '../actions/types';
import _ from 'lodash';

let initialState = {
  fields: {
    text: ''
  },
  lists: {
    todos: []
  }
};

const mergeFields = (fields, payload) => {
  let updatedFields = _.cloneDeep(fields);
  if (payload.overwrite)
    _.set(updatedFields, payload.field, payload.value);
  else
    _.merge(updatedFields, { [ payload.field ]: payload.value });

  return _.merge(updatedFields, { pristine: false });
};

const withSidebarReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_FIELD:
      return { ...state, fields: mergeFields(state.fields, payload) };
    case `${types.FETCH_TODOS}_FULFILLED`:
      return { ...state, lists: { ...state.lists, todos: payload }};
    default:
      return state;
  }
};

export default withSidebarReducer;
