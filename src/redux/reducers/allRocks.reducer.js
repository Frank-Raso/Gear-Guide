import { combineReducers } from 'redux';

const allRocks = (state = [], action) => {
  switch (action.type) {
    case 'ALL_ROCKS':
      return action.payload;
    default:
      return state;
  }
};
export default allRocks;
