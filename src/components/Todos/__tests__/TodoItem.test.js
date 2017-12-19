import TodoItem from '../TodoItem';
import { todos as mockTodos } from '../../../__mocks__/todos.mock';

const deleteTodoFunction = jest.fn();
const editTodoFunction = jest.fn();
const setup = () => {
  const props = {
    todo: mockTodos[0],
    onEdit: editTodoFunction,
    onDelete: deleteTodoFunction
  };

  const shallowWrapper = shallow(<TodoItem {...props} />);
  const mountedWrapper = mount(<TodoItem {...props} />);

  return {
    shallowWrapper,
    mountedWrapper,
    props
  };
};

describe('TodoItem', () => {
  it('renders correctly', () => {
    const { shallowWrapper } = setup();
    expect(toJson(shallowWrapper)).toMatchSnapshot();
  });

  it('mounts correctly', () => {
    const { mountedWrapper } = setup();
    expect(toJson(mountedWrapper)).toMatchSnapshot();
  });

  it('toggles todo form and todo title with edit todo click', () => {
    const { mountedWrapper } = setup();
    mountedWrapper.setState({
      editForm: 'hide'
    });
    mountedWrapper.find('EditTodo').simulate('click');
    expect(mountedWrapper.instance().state.todoTitle).toEqual('hide');
    expect(mountedWrapper.instance().state.editForm).toEqual('show');

    mountedWrapper.find('EditTodo').simulate('click');
    expect(mountedWrapper.instance().state.todoTitle).toEqual('show');
    expect(mountedWrapper.instance().state.editForm).toEqual('hide');
  });

  it('changes todoItem status', () => {
    const { mountedWrapper } = setup();
    const submitedTodo = {
      userId: 1,
      id: 1,
      title: ' Levies and I ',
      completed: false
    };

    mountedWrapper.find('TodoStatus').simulate('click');
    expect(editTodoFunction).toHaveBeenCalledWith(submitedTodo);
  });

  it('edits a todoItem and hides form', () => {
    const { mountedWrapper } = setup();
    const event = { target: { value: 'Learn React Test Driven Development' } };
    const submitedTodo = {
      userId: 1,
      id: 1,
      title: 'Learn React Test Driven Development',
      completed: false
    };
    mountedWrapper.find('input').simulate('change', event);
    mountedWrapper.find('form').simulate('submit');

    expect(editTodoFunction).toHaveBeenCalledWith(submitedTodo);
    expect(mountedWrapper.instance().state.todoTitle).toEqual('show');
    expect(mountedWrapper.instance().state.editForm).toEqual('hide');
  });

  it('deletes a todoItem', () => {
    const { mountedWrapper } = setup();
    mountedWrapper.find('DeleteTodo').simulate('click');
    expect(deleteTodoFunction).toHaveBeenCalledWith(mockTodos[0].id);
  });

  it("shows 'Completed' according to passed in prop", () => {
    const { shallowWrapper } = setup();
    expect(shallowWrapper.find('.badge-primary').html()).toContain('Completed');
  });

  it("shows 'Unompleted' according to passed in prop", () => {
    const wrapper = shallow(
      <TodoItem {...setup().props} todo={mockTodos[2]} />
    );
    expect(wrapper.find('.badge-primary').html()).toContain('Not Completed');
  });
});
