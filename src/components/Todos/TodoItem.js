import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddTodo from './AddTodo';
import EditTodo from './EditTodo';
import DeleteTodo from './DeleteTodo';
import TodoStatus from './TodoStatus';
import './TodoItem.css';

class TodoItem extends Component {
  constructor() {
    super();
    this.state = {
      todoTitle: 'show',
      editForm: 'hide'
    };
  }

  editTodoToggle = () => {
    if (this.state.editForm === 'hide') {
      this.setState({
        todoTitle: 'hide',
        editForm: 'show'
      });
    } else {
      this.setState({
        todoTitle: 'show',
        editForm: 'hide'
      });
    }
  };

  handleEditTodo = todo => {
    const updateTodo = new Promise((resolve, reject) => {
      this.props.onEdit(todo);
      resolve();
    });

    updateTodo.then(() => {
      this.setState({
        todoTitle: 'show',
        editForm: 'hide'
      });
    });
  };

  handleTodoStatus = () => {
    const { todo } = this.props;
    const newTodo = {
      userId: 1,
      id: todo.id,
      title: todo.title,
      completed: !todo.completed
    };

    this.props.onEdit(newTodo);
  };

  handleDeleteTodo = () => {
    const id = this.props.todo.id;
    this.props.onDelete(id);
  };

  render() {
    const { editForm, todoTitle } = this.state;
    const { todo } = this.props;

    let completed;

    if (todo.completed) {
      completed = 'Completed';
    } else {
      completed = 'Not Completed';
    }

    return (
      <div className="TodoItem">
        <div className="card border-primary">
          <div className="card-body">
            <DeleteTodo onClick={this.handleDeleteTodo} />
            <blockquote className="card-blockquote">
              <p className={todoTitle}>
                {todo.title}&nbsp;&nbsp;
                <span className="badge badge-primary">{completed}</span>
              </p>
              <div className={editForm}>
                <AddTodo
                  todo={todo}
                  buttonText="Update Todo"
                  editTodo={this.handleEditTodo}
                />
              </div>
              <br />
              <footer>
                <EditTodo onClick={this.editTodoToggle} />&nbsp;&nbsp;
                <TodoStatus todo={todo} onClick={this.handleTodoStatus} />
              </footer>
            </blockquote>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

TodoItem.proptypes = {
  todo: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default TodoItem;
