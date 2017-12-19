import TodoStatus from '../TodoStatus';
import { todos as mockTodos } from '../../../__mocks__/todos.mock';

describe('TodoStatus', () => {
  const clickFunction = jest.fn();

  it('renders correctly', () => {
    const wrapper = shallow(
      <TodoStatus todo={mockTodos[1]} onClick={clickFunction} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('mounts correctly', () => {
    const wrapper = mount(
      <TodoStatus todo={mockTodos[1]} onClick={clickFunction} />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('calls a function on click', () => {
    const wrapper = shallow(
      <TodoStatus todo={mockTodos[3]} onClick={clickFunction} />
    );

    wrapper.simulate('click');
    expect(clickFunction).toHaveBeenCalled();
  });

  it("shows 'Mark as Undone' according to passed in prop", () => {
    const wrapper = shallow(
      <TodoStatus todo={mockTodos[3]} onClick={clickFunction} />
    );
    expect(wrapper.html()).toContain('Mark as Undone');
  });

  it("shows 'Mark as Done' according to passed in prop", () => {
    const wrapper = shallow(
      <TodoStatus todo={mockTodos[2]} onClick={clickFunction} />
    );
    expect(wrapper.html()).toContain('Mark as Done');
  });
});
