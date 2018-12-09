import React from 'react';
import PropTypes from 'prop-types';
// MATERIAL UI COMPONENTS
import {
  withStyles
} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import Drawer from '@material-ui/core/Drawer';
// MATERIAL UI ICONS
import AddIcon from '@material-ui/icons/Add';
// CUSTOM COMPONENTS
import TodoItemsList from '../../../components/TodoItemsList';
// VIEWS
import AddTodo from '../../../components/AddTodo';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  fab: {
    margin: theme.spacing.unit,
  },
});

const TodoList = ({
  ui,
  fields,
  lists,
  handlers,
  classes
}) => {
  return <React.Fragment>
    <Paper elevation={1}>
      <TodoItemsList todos={lists.todos} onClick={handlers.toggleCompletion}/>
    </Paper>
    <Fab color="primary" aria-label="Add" className={classes.fab} onClick={handlers.toggleAddTodoDrawer}>
      <AddIcon />
    </Fab>
    <Drawer
      anchor="bottom"
      open={ui.openAddTodo}
      onClose={handlers.toggleAddTodoDrawer}
    >
      <AddTodo text={fields.text} onChange={handlers.changeTextField} onSubmit={handlers.saveTodo}/>
    </Drawer>
  </React.Fragment>;
};

TodoList.propTypes = {
  ui: PropTypes.object.isRequired,
  fields: PropTypes.object.isRequired,
  lists: PropTypes.object.isRequired,
  handlers: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoList);
