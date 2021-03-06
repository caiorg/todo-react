import React from 'react';
import PropTypes from 'prop-types';
// MATERIAL UI COMPONENTS
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
// CUSTOM COMPONENTS
import TodoItem from '../TodoItem';

const TodoItemsList = ({
  todos,
  onClick,
  onDelete
}) => {

  return <List>
    {
      todos.map((todo, index) =>
        (
          <React.Fragment key={index}>
            <TodoItem {...todo} onClick={onClick(index)} onDelete={onDelete} />
            {
              index < todos.length - 1 &&
              <Divider />
            }
          </React.Fragment>
        )
      )
    }
  </List>;
};

TodoItemsList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoItemsList;
