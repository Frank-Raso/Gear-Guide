import { combineReducers } from 'redux';

const profileGear = (state = [], action) => {
  switch (action.type) {
    case 'SET_PGEAR':
      return action.payload;
    default:
      return state;
  }
};
export default profileGear;
