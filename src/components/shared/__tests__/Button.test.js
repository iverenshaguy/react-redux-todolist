import Button from '../Button';

const clickFunction = jest.fn();
const setup = () => {
  const props = {
    onClick: clickFunction,
    type: 'button',
    className: 'btnClassName'
  };
  const shallowWrapper = shallow(<Button {...props} />);
  const mountedWrapper = mount(<Button {...props} />);

  return {
    shallowWrapper,
    mountedWrapper,
    props
  };
};

describe('Button', () => {
  it('renders correctly', () => {
    const { shallowWrapper } = setup();
    expect(toJson(shallowWrapper)).toMatchSnapshot();
  });

  it('mounts correctly', () => {
    const { mountedWrapper } = setup();
    expect(toJson(mountedWrapper)).toMatchSnapshot();
  });

  it('calls a function', () => {
    const { mountedWrapper } = setup();
    mountedWrapper.simulate('click');
    expect(clickFunction).toHaveBeenCalled();
  });
});
