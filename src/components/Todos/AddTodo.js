import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      todo: {},
      value: ''
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.value === '') {
      alert('Title is required');
      return;
    }

    if (this.props.addTodo) {
      this.setState(
        {
          todo: {
            userId: 1,
            id:
              this.props.todos.length >= 1
                ? +this.props.todos[this.props.todos.length - 1].id + 1
                : 1,
            title: this.state.value,
            completed: false
          }
        },
        () => {
          this.props.addTodo(this.state.todo);
        }
      );
    } else if (this.props.editTodo) {
      const editedTodo = {
        userId: 1,
        id: this.props.todo.id,
        title: this.state.value,
        completed: false
      };
      this.setState(
        prevState => ({
          todo: Object.assign({}, this.state.todo, editedTodo)
        }),
        () => {
          this.props.editTodo(this.state.todo);
        }
      );
    }
  };

  render() {
    return (
      <div className="AddTodo">
        <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
          <input
            className="form-control mr-sm-2 new-todo"
            type="text"
            name="todoinput"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Enter Todo"
            autoFocus={true}
          />
          <button type="submit" className="btn btn-primary my-2 my-sm-0">
            {this.props.buttonText}
          </button>
        </form>
      </div>
    );
  }
}

AddTodo.proptypes = {
  todo: PropTypes.object,
  addTodo: PropTypes.func,
  editTodo: PropTypes.func,
  buttonText: PropTypes.string.isRequired
};

export default AddTodo;
