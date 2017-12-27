import React from 'react';
import FilterButton from '../../containers/FilterButton';

const SHOW_ALL = 'all';
const SHOW_COMPLETED = 'completed';
const SHOW_UNCOMPLETED = 'uncompleted';

const TodoFilter = () => {
  return (
    <div>
      <FilterButton filter={SHOW_ALL}>All</FilterButton>&nbsp;&nbsp;
      <FilterButton filter={SHOW_UNCOMPLETED}>
        Uncompleted
      </FilterButton>&nbsp;&nbsp;
      <FilterButton filter={SHOW_COMPLETED}>Completed</FilterButton>&nbsp;&nbsp;
    </div>
  );
};

export default TodoFilter;
