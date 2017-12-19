import DeleteTodo from '../DeleteTodo';

describe('DeleteTodo', () => {
  const clickFunction = jest.fn();

  it('renders correctly', () => {
    const wrapper = shallow(<DeleteTodo onClick={clickFunction} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('mounts correctly', () => {
    const wrapper = mount(<DeleteTodo onClick={clickFunction} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('calls a function on click', () => {
    const wrapper = shallow(<DeleteTodo onClick={clickFunction} />);

    wrapper.simulate('click');
    expect(clickFunction).toHaveBeenCalled();
  });
});
