export const store = data => {
  if (data) {
    return localStorage.setItem('myTodoList', JSON.stringify(data));
  }

  var store = localStorage.getItem('myTodoList');
  return (store && JSON.parse(store)) || [];
};
