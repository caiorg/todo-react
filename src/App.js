import React, { Component } from 'react';
import PropTypes from 'prop-types';
// MATERIAL UI COMPONENTS
import withStyles from '@material-ui/core/styles/withStyles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
// CUSTOM COMPONENTS
import TodoList from './containers/TodoList';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class App extends Component {
  state = {
    top: false,
    left: true,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  sideList = (
    <div className={this.props.classes.list}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <TodoList/>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {this.sideList}
          </div>
        </Drawer>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object
};

// function mapStateToProps(state) {
//   return {
//     user: state.user
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators({}, dispatch)
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default withStyles(styles)(App);
