import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import uuidv3 from 'uuid/v3';
// HIGHER ORDER COMPONENTS
import withSidebar from '../../components/HigherOrderComponents/WithSidebar';
// ACTIONS
import * as todoListActions from './actions/todo-list-actions';
// VIEWS
import TodoList from './views/todo-list';
import NoLists from './views/no-lists';

class TodoListContainer extends Component {

  state = {
    ui: {
      openAddTodo: false,
      createTodoList: false
    },
    todos: [
      {
        id: uuidv3('Todo 1', uuidv3.DNS),
        text: 'Todo 1',
        completed: false
      },
      {
        id: uuidv3('Todo 2', uuidv3.DNS),
        text: 'Todo 2',
        completed: false
      },
      {
        id: uuidv3('Todo 3', uuidv3.DNS),
        text: 'Todo 3',
        completed: false
      }
    ],
    fields: {
      text: ''
    }
  }

  componentDidMount() {
    const {actions, match} = this.props;
    actions.getTodosListDetails(match.params.id);
    actions.getTodos(match.params.id);
  }

  componentDidUpdate(prevProps) {
    const {match: prevMatch} = prevProps;
    const {match: thisMatch, actions} = this.props;

    if (thisMatch.params.id !== prevMatch.params.id) {
      actions.getTodosListDetails(thisMatch.params.id);
      actions.getTodos(thisMatch.params.id);
    }
  }

  toggleCompletion = (index) => () => {
    const targetTodo = { ...this.state.todos[index]
    };
    const newTodos = [...this.state.todos];
    newTodos[index] = {
      ...targetTodo,
      completed: !targetTodo.completed
    };
    this.setState({
      todos: newTodos
    });
  };

  toggleAddTodoDrawer = () => {
    this.setState({
      ui: {
        ...this.state.ui,
        openAddTodo: !this.state.ui.openAddTodo
      }
    });
  }

  toggleOptionsMenu = event => {
    this.setState({
      ...this.state.ui,
      ui: {
        optionsMenuAnchorEl: this.state.ui.optionsMenuAnchorEl ? null : event.target
      }
    });
  }

  handleSaveTodo = (event) => {
    event.preventDefault();
    const {todos, fields} = this.state;
    this.setState({
      ui: {
        openAddTodo: false
      },
      todos: [
        ...todos,
        {
          id: uuidv3(fields.text, uuidv3.DNS),
          text: fields.text,
          completed: false
        }
      ]
    });
  }

  handleDeleteTodo = (id) => () => {
    this.setState({
      todos: this.state.todos.filter(item => item.id !== id)
    });
  }

  handleChangeTextField = event => {
    this.setState({
      fields: {
        [event.target.name]: event.target.value
      }
    });
  }

  get handlers() {
    return {
      ...this.props.handlers,
      toggleCompletion: this.toggleCompletion,
      toggleAddTodoDrawer: this.toggleAddTodoDrawer,
      changeTextField: this.handleChangeTextField,
      saveTodo: this.handleSaveTodo,
      deleteTodo: this.handleDeleteTodo,
      toggleOptionsMenu: this.toggleOptionsMenu
    };
  }

  renderView = () => {
    const {todoList: {fields, lists}, match} = this.props;
    if (match.params.id)
      return <TodoList
        ui={this.state.ui}
        fields={fields}
        lists={lists}
        handlers={this.handlers}
      />;

    return <NoLists handlers={this.handlers} />;
  };

  render() {
    return this.renderView();
  }
}

TodoListContainer.propTypes = {
  todoList: PropTypes.object.isRequired,
  handlers: PropTypes.object.isRequired,
  fields: PropTypes.object,
  actions: PropTypes.object.isRequired,
  match: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({...todoListActions}, dispatch)
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withSidebar
)(TodoListContainer);
