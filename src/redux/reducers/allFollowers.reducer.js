import { combineReducers } from 'redux';

const allFollowers = (state = [], action) => {
  switch (action.type) {
    case 'SET_ALL_FOLLOW':
      return action.payload;
    default:
      return state;
  }
};
export default allFollowers;
