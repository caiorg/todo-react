import React, {
  Component
} from 'react';
// import PropTypes from 'prop-types';
// VIEWS
import TodoList from './views/todo-list';

class TodoListContainer extends Component {

  state = {
    todos: [
      {
        text: 'Todo 1',
        completed: false
      },
      {
        text: 'Todo 2',
        completed: false
      },
      {
        text: 'Todo 3',
        completed: false
      }
    ]
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

  render() {
    return <TodoList lists={{todos: this.state.todos}} handlers={{toggleCompletion: this.toggleCompletion}} />;
  }
}

TodoListContainer.propTypes = {
};

export default TodoListContainer;
