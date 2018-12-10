import React, {
  Component
} from 'react';
// import PropTypes from 'prop-types';
import uuidv3 from 'uuid/v3';
// VIEWS
import TodoList from './views/todo-list';

class TodoListContainer extends Component {

  state = {
    ui: {
      openAddTodo: false
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
        openAddTodo: !this.state.ui.openAddTodo
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
      toggleCompletion: this.toggleCompletion,
      toggleAddTodoDrawer: this.toggleAddTodoDrawer,
      changeTextField: this.handleChangeTextField,
      saveTodo: this.handleSaveTodo,
      deleteTodo: this.handleDeleteTodo
    };
  }

  render() {
    return <TodoList
      ui={this.state.ui}
      fields={this.state.fields}
      lists={{todos: this.state.todos}}
      handlers={this.handlers}
    />;
  }
}

TodoListContainer.propTypes = {};

export default TodoListContainer;
