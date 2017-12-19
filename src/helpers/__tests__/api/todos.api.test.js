import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
} from '../../api/todos.api';
import { todos as mockTodos } from '../../../__mocks__/todos.mock';

describe('Api', () => {
  localStorage.setItem('myTodoList', JSON.stringify(mockTodos));

  it('gets all todos', async () => {
    expect.assertions(1);

    const data = await getTodos();
    expect(data).toEqual(mockTodos);
  });

  it('creates a todo', async () => {
    expect.assertions(1);

    const newTodo = {
      id: 5,
      title: 'Go to Church',
      completed: false
    };

    const data = await createTodo(newTodo);
    expect(data).toEqual(newTodo);
  });

  it('updates a todo', async () => {
    expect.assertions(1);

    const updatedTodo = {
      id: 2,
      title: 'Pray',
      completed: false
    };

    const data = await updateTodo(updatedTodo);
    expect(data).toEqual(updatedTodo);
  });

  it('deletes a todo', async () => {
    expect.assertions(1);

    const data = await deleteTodo(3);
    expect(data).toEqual({});
  });
});
