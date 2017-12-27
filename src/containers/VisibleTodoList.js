import { connect } from 'react-redux';
import { deleteTodo, toggleTodo, toggleEditTodo } from '../store/Todos/actions';
import TodoList from '../components/Todos/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'completed':
      return todos.filter(t => t.completed);
    case 'uncompleted':
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    // todos: getVisibleTodos(state.todos, state.visibilityFilter),
    todos: getVisibleTodos(state.todos, ownProps.filter),
    activeTodo: state.activeTodo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleTodoStatus: id => {
      dispatch(toggleTodo(id));
    },
    handleDeleteTodo: id => {
      dispatch(deleteTodo(id));
    },
    editTodoToggle: id => {
      dispatch(toggleEditTodo(id));
    }
  };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
