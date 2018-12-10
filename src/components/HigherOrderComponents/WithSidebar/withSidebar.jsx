import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
// ACTIONS
import * as withSidebarActions from './actions/with-sidebar-actions';
// MATERIAL UI COMPONENTS
import withStyles from '@material-ui/core/styles/withStyles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// MATERIAL UI ICONS
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AddIcon from '@material-ui/icons/Add';
// VIEWS
import CreateTodoList from './views/create-todo-list';

const styles = {
  list: {
    width: 250
  }
};

const withSidebar = (WrappedComponent) => {
  class WithSidebar extends Component {
    state = {
      open: false,
      createTodoList: false
    };

    get handlers() {
      return {
        toggleSidebar: this.toggleDrawer,
        toggleTodoListCreation: this.toggleTodoListCreation,
        changeTextField: this.handleChangeTextField,
        createTodoList: this.handleTodoListCreation
      };
    }

    componentDidMount() {
      this.props.actions.getTodoLists();
    }

    toggleDrawer = () => {
      this.setState({
        open: !this.state.open
      });
    };

    toggleTodoListCreation = () => {
      this.setState({
        createTodoList: !this.state.createTodoList
      }, () => {
        if (!this.state.createTodoList)
          this.props.actions.setField({field: 'listName', value: ''});
      });
    }

    handleChangeTextField = event => {
      this.props.actions.setField({field: event.target.name, value: event.target.value});
    }

    handleTodoListCreation = (event) => {
      event.preventDefault();
      
      const {withSidebar: {fields}, actions} = this.props;

      const payload = {
        name: fields.listName
      };

      actions.createTodoList(payload);
    }

    get sideList() {
      const {withSidebar: {todosLists}} = this.props;
      return <React.Fragment>
        <List>
          {
            todosLists &&
            todosLists.length > 0 &&
            todosLists.map((todo, index) => (
              <ListItem button key={todo.id} onClick={this.toggleDrawer}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={todo.text} />
              </ListItem>
            ))
          }
        </List>
        <List>
          <ListItem button component="a" onClick={this.toggleTodoListCreation}>
            <ListItemIcon><AddIcon /></ListItemIcon>
            <ListItemText primary={'Nova lista'} />
          </ListItem>
        </List>
      </React.Fragment>;
    }

    render() {
      const {withSidebar: {fields}} = this.props;
      return <React.Fragment>
        <WrappedComponent {...this.props} handlers={this.handlers} />
        <Drawer open={this.state.open} onClose={this.toggleDrawer}>
          {this.sideList}
        </Drawer>
        <CreateTodoList fields={fields} handlers={this.handlers} ui={this.state} />
      </React.Fragment>;
    }
  }

  WithSidebar.displayName = `WithSidebar(${getDisplayName(WrappedComponent)})`;

  WithSidebar.propTypes = {
    withSidebar: PropTypes.object.isRequired
  };

  const mapStateToProps = (state) => {
    return {
      withSidebar: state.withSidebar
    };
  };

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      actions: {
        ...ownProps.actions,
        ...bindActionCreators({ ...withSidebarActions }, dispatch)
      }
    };
  };

  return compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles),
  )(WithSidebar);
};

const getDisplayName = (WrappedComponent) => {
  return (WrappedComponent && WrappedComponent.displayName) || (WrappedComponent && WrappedComponent.name) || 'Component';
};

export default withSidebar;
