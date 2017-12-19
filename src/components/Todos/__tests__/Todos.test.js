import Todos from '../index';
import { todos as mockTodos } from '../../../__mocks__/todos.mock';
import todosApi from '../../../helpers/api/__mocks__/todos.api';

// jest.mock('../../../helpers/api/__mocks__/todos.api');

describe('Todos', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Todos api={todosApi} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('mounts correctly', () => {
    const wrapper = mount(<Todos api={todosApi} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('correctly updates the state after AJAX call in `componentDidMount` was made', done => {
    const wrapper = mount(<Todos api={todosApi} />);
    expect.assertions(1);
    setImmediate(() => {
      expect(wrapper.instance().state.todos.length).toBe(4);
      done();
    });
  });

  it('shows all todos', () => {
    const wrapper = mount(<Todos api={todosApi} />);
    wrapper.setState({
      todos: mockTodos,
      sort: 'SHOW_COMPLETED'
    });

    wrapper.find('.show-all-btn').simulate('click');
    expect(wrapper.instance().state.sort).toEqual('SHOW_ALL');
    expect(wrapper.find('.todolist').text()).toContain(' Levies and I ');
    expect(wrapper.find('.todolist').text()).toContain(' and on time ');
    expect(wrapper.find('.todolist').text()).toContain(' fly less come ');
    expect(wrapper.find('.todolist').text()).toContain(
      ' Who will be easy for those services '
    );
  });

  it('shows only completed todos', () => {
    const wrapper = mount(<Todos api={todosApi} />);
    wrapper.setState({
      todos: mockTodos,
      sort: 'SHOW_ALL'
    });

    wrapper.find('.show-completed-btn').simulate('click');
    expect(wrapper.instance().state.sort).toEqual('SHOW_COMPLETED');
    expect(wrapper.find('.todolist').text()).toContain(' Levies and I ');
    expect(wrapper.find('.todolist').text()).toContain(' and on time ');
    expect(wrapper.find('.todolist').text()).not.toContain(' fly less come ');
    expect(wrapper.find('.todolist').text()).not.toContain(
      ' Who will be easy for those services '
    );
  });

  it('shows only uncompleted todos', () => {
    const wrapper = mount(<Todos api={todosApi} />);
    wrapper.setState({
      todos: mockTodos,
      sort: 'SHOW_ALL'
    });

    wrapper.find('.show-uncompleted-btn').simulate('click');
    expect(wrapper.instance().state.sort).toEqual('SHOW_UNCOMPLETED');
    expect(wrapper.find('.todolist').text()).toContain(' fly less come ');
    expect(wrapper.find('.todolist').text()).toContain(
      ' Who will be easy for those services '
    );
    expect(wrapper.find('.todolist').text()).not.toContain(' Levies and I ');
    expect(wrapper.find('.todolist').text()).not.toContain(' and on time ');
  });

  it('toggles todo', () => {
    const wrapper = mount(<Todos api={todosApi} />);
    const showAllTodosSpy = jest.spyOn(wrapper.instance(), 'showAllTodos');
    const showCompletedTodosSpy = jest.spyOn(
      wrapper.instance(),
      'showCompletedTodos'
    );
    const showUncompletedTodosSpy = jest.spyOn(
      wrapper.instance(),
      'showUncompletedTodos'
    );

    wrapper.setState({
      todos: mockTodos,
      sort: 'SHOW_ALL'
    });

    wrapper.find('.show-all-btn').simulate('click');
    expect(showAllTodosSpy).toHaveBeenCalled();

    wrapper.find('.show-completed-btn').simulate('click');
    expect(showCompletedTodosSpy).toHaveBeenCalled();

    wrapper.find('.show-uncompleted-btn').simulate('click');
    expect(showUncompletedTodosSpy).toHaveBeenCalled();
  });

  it('adds a new todo', done => {
    const wrapper = mount(<Todos api={todosApi} />);
    const event = { target: { value: 'Learn React TDD' } };

    setImmediate(() => {
      expect(wrapper.instance().state.todos.length).toBe(4);
      wrapper.find('.header AddTodo input').simulate('change', event);
      wrapper.find('.header AddTodo form').simulate('submit');

      setImmediate(() => {
        expect(wrapper.instance().state.todos.length).toBe(5);
        expect(wrapper.text()).toContain('Learn React TDD');
        done();
      });
    });
  });

  it('edits a todo', done => {
    const wrapper = mount(<Todos api={todosApi} />);
    const event = { target: { value: 'Learn React TDD with Jest and Enzyme' } };

    setImmediate(() => {
      wrapper.update();
      wrapper.find('#todoitem-2 input').simulate('change', event);
      wrapper.find('#todoitem-2 form').simulate('submit');
      setImmediate(() => {
        expect(wrapper.instance().state.todos[1].title).toBe(
          'Learn React TDD with Jest and Enzyme'
        );
        expect(wrapper.text()).toContain(
          'Learn React TDD with Jest and Enzyme'
        );
        done();
      });
    });
  });

  it('changes Todo status', done => {
    const wrapper = mount(<Todos api={todosApi} />);
    setImmediate(() => {
      wrapper.update();
      wrapper.find('#todoitem-2 TodoStatus').simulate('click');
      setImmediate(() => {
        expect(wrapper.instance().state.todos[1].completed).toBeTruthy();
        done();
      });
    });
  });

  it('deletes a todo', done => {
    const wrapper = mount(<Todos api={todosApi} />);
    setImmediate(() => {
      wrapper.update();
      wrapper.find('#todoitem-2 DeleteTodo').simulate('click');
      setImmediate(() => {
        expect(wrapper.instance().state.todos.length).toBe(3);
        done();
      });
    });
  });
});
