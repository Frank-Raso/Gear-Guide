import { combineReducers } from 'redux';

const follow = (state = [], action) => {
  switch (action.type) {
    case 'SET_FOLLOW':
      return action.payload;
    default:
      return state;
  }
};
export default follow;
