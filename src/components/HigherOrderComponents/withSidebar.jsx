import React, { Component } from 'react';
import { compose } from 'redux';
// MATERIAL UI COMPONENTS
import withStyles from '@material-ui/core/styles/withStyles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const styles = {
  list: {
    width: 250
  }
};

const withSidebar = (WrappedComponent) => {
  class WithSidebar extends Component {
    state = {
      open: false,
    };

    get handlers() {
      return {
        toggleSidebar: this.toggleDrawer
      };
    }

    toggleDrawer = () => {
      this.setState({
        open: !this.state.open
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
      return <React.Fragment>
        <WrappedComponent {...this.props} handlers={this.handlers} />
        <Drawer open={this.state.open} onClose={this.toggleDrawer}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >
            {this.sideList}
          </div>
        </Drawer>
      </React.Fragment>;
    }
  }

  WithSidebar.displayName = `WithSidebar(${getDisplayName(WrappedComponent)})`;

  return WithSidebar;
};

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export default compose(
  withStyles(styles),
  withSidebar
);
