import React from 'react';
import PropTypes from 'prop-types';
// MATERIAL UI COMPONENTS
import {
  withStyles
} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
// MATERIAL UI ICONS
import AddIcon from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';
// CUSTOM COMPONENTS
import TodoItemsList from '../../../components/TodoItemsList';
// VIEWS
import AddTodo from '../../../components/AddTodo';

const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  menu: {
    position: 'absolute',
    top: theme.spacing.unit * 2,
    left: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    display: 'flex',
    margin: '0 auto',
    height: 250,
    alignItems: 'flex-end',
    padding: `0 ${theme.spacing.unit * 2}px`,
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
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <div className={classes.heroUnit}>
          <IconButton className={classes.button} aria-label="Open sidebar" onClick={handlers.toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
              Album layout
            </Typography>
          </div>
        </div>
      </Grid>
      <Grid item xs={12}>
        <TodoItemsList todos={lists.todos} onClick={handlers.toggleCompletion} onDelete={handlers.deleteTodo}/>
      </Grid>
    </Grid>
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
