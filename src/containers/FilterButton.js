import React from 'react';
// import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { setVisibilityFilter } from '../store/Todos/actions';
// import Button from '../components/shared/Button';

const FilterButton = ({ filter, children }) => (
  <NavLink
    to={filter === 'all' ? '/' : `/${filter}`}
    className="btn btn-outline-primary"
    activeClassName="btn-primary"
  >
    {children}
  </NavLink>
);

// const mapStateToProps = (state, ownProps) => {
//   return {
//     btnClass:
//       ownProps.filter === state.visibilityFilter
//         ? 'btn btn-primary'
//         : 'btn btn-outline-primary'
//   };
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick: () => {
//       dispatch(setVisibilityFilter(ownProps.filter));
//     }
//   };
// };

// const FilterButton = connect(mapStateToProps, mapDispatchToProps)(Button);

export default FilterButton;
