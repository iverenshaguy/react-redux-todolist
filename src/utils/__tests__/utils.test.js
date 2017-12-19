import { store } from '../index';

describe('Utilities: Store', () => {
  const data = { key: 'value' };
  it('saves data to the store', () => {
    store(data);

    expect(JSON.parse(localStorage.getItem('myTodoList'))).toEqual(data);
  });

  it('gets data from the store', () => {
    localStorage.setItem('myTodoList', JSON.stringify(data));

    expect(store()).toEqual(data);
  });

  it('gets empty array from the store with no data', () => {
    localStorage.clear();
    expect(store()).toEqual([]);
  });
});
