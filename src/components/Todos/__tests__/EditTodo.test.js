import EditTodo from '../EditTodo';

describe('EditTodo', () => {
  const clickFunction = jest.fn();

  it('renders correctly', () => {
    const wrapper = shallow(<EditTodo onClick={clickFunction} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('mounts correctly', () => {
    const wrapper = mount(<EditTodo onClick={clickFunction} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('calls a function on click', () => {
    const wrapper = shallow(<EditTodo onClick={clickFunction} />);

    wrapper.simulate('click');
    expect(clickFunction).toHaveBeenCalled();
  });
});
