import React from 'react';
import PropTypes from 'prop-types';
// MATERIAL UI COMPONENTS
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
// CUSTOM COMPONENTS
import Todo from './Todo';

const TodoList = ({
  todos,
  onClick
}) => {

  return <List>
    {
      todos.map((todo, index) =>
        (
          <React.Fragment key={index}>
            <Todo {...todo} onClick={onClick(index)} />
            <Divider />
          </React.Fragment>
        )
      )
    }
  </List>;
};

TodoList.propTypes = {
  todos: PropTypes.object.isRequired,
  onClick: PropTypes.object.isRequired,
};

export default TodoList;
