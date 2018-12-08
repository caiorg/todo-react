import React from 'react';
import PropTypes from 'prop-types';
// MATERIAL UI COMPONENTS
import {
  withStyles
} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// CUSTOM COMPONENTS
import TodoItemsList from '../../../components/TodoItemsList';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

const TodoList = ({
  lists,
  handlers
}) => {
  return <Paper elevation={1}>
    <TodoItemsList todos={lists.todos} onClick={handlers.toggleCompletion}/>
  </Paper>;
};

TodoList.propTypes = {
  lists: PropTypes.object.isRequired,
  handlers: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoList);
