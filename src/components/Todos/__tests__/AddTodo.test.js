import AddTodo from '../AddTodo';
import { todos as mockTodos } from '../../../__mocks__/todos.mock';

const setup = () => {
  const props = {
    buttonText: 'Add Todo'
  };
  const shallowWrapper = shallow(<AddTodo {...props} />);
  const mountedWrapper = mount(<AddTodo {...props} />);

  return {
    shallowWrapper,
    mountedWrapper,
    props
  };
};

describe('AddTodo', () => {
  it('renders correctly', () => {
    const { shallowWrapper } = setup();
    expect(toJson(shallowWrapper)).toMatchSnapshot();
  });

  it('mounts correctly', () => {
    const { mountedWrapper } = setup();
    expect(toJson(mountedWrapper)).toMatchSnapshot();
  });

  it('responds to todo change', () => {
    const event = { target: { value: 'Go to Church' } };
    const { mountedWrapper } = setup();
    // const handleChangeSpy = jest.spyOn(
    //   mountedWrapper.instance(),
    //   'handleChange'
    // );
    expect(toJson(mountedWrapper)).toMatchSnapshot();
    mountedWrapper.find('input').simulate('change', event);
    mountedWrapper
      .find('input')
      .simulate('keyDown', { keyCode: 9, key: 'Tab' });
    // expect(handleChangeSpy).toHaveBeenCalledTimes(1);
    expect(mountedWrapper.instance().state.value).toBe('Go to Church');
  });

  it('alerts warning for empty todo input', () => {
    const event = { target: { value: '' } };
    const { mountedWrapper } = setup();
    window.alert = jest.fn();
    mountedWrapper.find('input').simulate('change', event);
    mountedWrapper.find('form').simulate('submit');
    expect(window.alert).toHaveBeenCalledWith('Title is required');
  });

  it('adds new todo to state', () => {
    const event = { target: { value: 'Read My Bible' } };
    const { mountedWrapper } = setup();
    mountedWrapper.find('input').simulate('change', event);
    mountedWrapper.find('form').simulate('submit');
    expect(mountedWrapper.instance().state.value).toBe('Read My Bible');
  });

  it('creates a new todo object and sends it Todos with empty todos array', () => {
    const event = { target: { value: 'Wash my Clothes' } };
    const response = {
      userId: 1,
      id: 1,
      title: 'Wash my Clothes',
      completed: false
    };

    const addTodo = jest.fn();
    const wrapper = mount(
      <AddTodo {...setup().props} addTodo={addTodo} todos={[]} />
    );

    wrapper.find('input').simulate('change', event);
    wrapper.find('form').simulate('submit');
    expect(wrapper.instance().state.todo).toEqual(response);
  });

  it('creates a new todo object and sends it Todos', () => {
    const event = { target: { value: 'Learn React TDD' } };
    const response = {
      userId: 1,
      id: 5,
      title: 'Learn React TDD',
      completed: false
    };

    const addTodo = jest.fn();
    const wrapper = mount(
      <AddTodo {...setup().props} addTodo={addTodo} todos={mockTodos} />
    );

    wrapper.find('input').simulate('change', event);
    wrapper.find('form').simulate('submit');
    expect(wrapper.instance().state.todo).toEqual(response);
  });

  it('edits a todo object', () => {
    const event = { target: { value: 'Learn React Test Driven Development' } };
    const response = {
      userId: 1,
      id: 3,
      title: 'Learn React Test Driven Development',
      completed: false
    };

    const addTodo = jest.fn();
    const wrapper = mount(
      <AddTodo {...setup().props} editTodo={addTodo} todo={mockTodos[2]} />
    );

    wrapper.find('input').simulate('change', event);
    wrapper.find('form').simulate('submit');
    expect(wrapper.instance().state.todo).toEqual(response);
  });
});
