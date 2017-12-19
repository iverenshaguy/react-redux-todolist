import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import Button from '../shared/Button';

const SHOW_ALL = 'SHOW_ALL';
const SHOW_COMPLETED = 'SHOW_COMPLETED';
const SHOW_UNCOMPLETED = 'SHOW_UNCOMPLETED';

class Todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      sort: SHOW_ALL
    };
  }

  handleAddTodo = newTodo => {
    this.props.api.createTodo(newTodo).then(todo =>
      this.setState(prevState => ({
        todos: [...prevState.todos, todo],
        sort: SHOW_ALL
      }))
    );
  };

  handleEditTodo = todo => {
    this.props.api.updateTodo(todo).then(updatedTodo => {
      const newTodos = this.state.todos.map(
        todoItem =>
          updatedTodo.id === todoItem.id
            ? Object.assign({}, todoItem, updatedTodo)
            : todoItem
      );

      this.setState({
        todos: newTodos,
        todoTitle: 'show',
        editForm: 'hide'
      });
    });
  };

  handleDeleteTodo = id => {
    const newTodos = this.state.todos.filter(todo => todo.id !== id);

    this.props.api.deleteTodo(id).then(() => {
      this.setState({
        todos: newTodos,
        sort: SHOW_ALL
      });
    });
  };

  showAllTodos = () => {
    this.setState({
      sort: SHOW_ALL
    });
  };

  showUncompletedTodos = () => {
    this.setState({
      sort: SHOW_UNCOMPLETED
    });
  };

  showCompletedTodos = () => {
    this.setState({
      sort: SHOW_COMPLETED
    });
  };

  componentDidMount = () => {
    this.props.api.getTodos().then(todos =>
      this.setState({
        todos: todos
      })
    );
  };

  renderNoTodo = () => {
    return <p>You don't have any todos yet. Add a Todo</p>;
  };

  renderTodos = () => {
    const { todos, sort } = this.state;
    let sortedTodos;

    if (sort === SHOW_ALL) {
      sortedTodos = todos;
    }

    if (sort === SHOW_UNCOMPLETED) {
      sortedTodos = todos.filter(todo => !todo.completed);
    }

    if (sort === SHOW_COMPLETED) {
      sortedTodos = todos.filter(todo => todo.completed);
    }

    const todoItems = sortedTodos
      .slice(0)
      .reverse()
      .map(todo => {
        return (
          <div key={todo.id} id={`todoitem-${todo.id}`}>
            <TodoItem
              todo={todo}
              onEdit={this.handleEditTodo}
              onDelete={this.handleDeleteTodo}
            />
          </div>
        );
      });

    return todoItems;
  };

  render() {
    const { todos, sort } = this.state;
    const showAllBtnClass = classNames({
      btn: true,
      'show-all-btn': true,
      'btn-outline-primary': sort !== SHOW_ALL,
      'btn-primary': sort === SHOW_ALL
    });
    const showCompletedBtnClass = classNames({
      btn: true,
      'show-completed-btn': true,
      'btn-outline-primary': sort !== SHOW_COMPLETED,
      'btn-primary': sort === SHOW_COMPLETED
    });
    const showUncompletedBtnClass = classNames({
      btn: true,
      'show-uncompleted-btn': true,
      'btn-outline-primary': sort !== SHOW_UNCOMPLETED,
      'btn-primary': sort === SHOW_UNCOMPLETED
    });

    return (
      <div className="Todos">
        <div className="header">
          <h1>Todos</h1>
          <br />
          <h3>Add Todo Item</h3>
          <AddTodo
            todos={todos}
            addTodo={this.handleAddTodo}
            buttonText="Add Todo"
          />
          <hr />
          <h3>Todos ({todos.length})</h3>
          <hr />
          <Button
            btnClass={showAllBtnClass}
            buttonText="All"
            onClick={this.showAllTodos}
          />&nbsp;&nbsp;
          <Button
            btnClass={showUncompletedBtnClass}
            buttonText="Uncompleted"
            onClick={this.showUncompletedTodos}
          />&nbsp;&nbsp;
          <Button
            btnClass={showCompletedBtnClass}
            buttonText="Completed"
            onClick={this.showCompletedTodos}
          />&nbsp;&nbsp;
        </div>
        <hr />
        <div className="todolist">
          {todos.length === 0 ? this.renderNoTodo() : this.renderTodos()}
        </div>
        <br />
      </div>
    );
  }
}

Todos.proptypes = {
  api: PropTypes.shape({
    getTodos: PropTypes.func.isRequired,
    createTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  })
};

export default Todos;
