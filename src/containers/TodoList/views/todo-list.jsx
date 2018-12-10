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
import Button from '@material-ui/core/Button';
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
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
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
          <IconButton className={classes.button} aria-label="Open sidebar">
            <MenuIcon />
          </IconButton>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Album layout
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
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
