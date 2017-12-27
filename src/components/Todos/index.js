import React, { Component } from 'react';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';
import TodoFilter from './TodoFilter';

class TodoApp extends Component {
  // constructor() {
  //   super();
  // }

  // componentDidMount = () => {
  //   this.props.api.getTodos().then(todos =>
  //     this.setState({
  //       todos: todos
  //     })
  //   );
  // };

  // renderNoTodo = () => {
  //   return <p>You don't have any todos yet. Add a Todo</p>;
  // };

  // renderTodos = () => {
  //   return <VisibleTodoList />;
  // };

  render() {
    return (
      <div className="Todos">
        <div className="header">
          <h1>Todos</h1>
          <br />
          <h3>Add Todo Item</h3>
          <AddTodo addTodo buttonText="Add Todo" />
          <hr />
          <TodoFilter />
        </div>
        <hr />
        <div className="todolist">
          <VisibleTodoList filter={this.props.filter || 'all'} />
        </div>
        <br />
      </div>
    );
  }
}

export default TodoApp;
