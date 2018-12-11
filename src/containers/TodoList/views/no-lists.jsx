import React from 'react';
import PropTypes from 'prop-types';
// MATERIAL UI COMPONENTS
import {
  withStyles
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// MATERIAL UI ICONS
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  leftTopButton: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
});

const TodoList = ({
  handlers,
  classes
}) => {
  return <React.Fragment>
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <div className={classes.heroUnit}>
          <IconButton className={classes.topLeftButton} aria-label="Open sidebar" onClick={handlers.toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Ops! Não encontramos nenhuma lista
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center" align="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={handlers.toggleSidebar}>
                    Abrir menu
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  </React.Fragment>;
};

TodoList.propTypes = {
  handlers: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoList);
