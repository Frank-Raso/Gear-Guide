import { combineReducers } from 'redux';

const eachGear = (state = [], action) => {
  switch (action.type) {
    case 'EACH_GEAR':
      return action.payload;
    default:
      return state;
  }
};
export default eachGear;
