import { combineReducers } from "redux";

const guitarGear = (state = [], action) => {
  switch (action.type) {
    case "SET_GUITARS":
      return action.payload;
    default:
      return state;
  }
};
export default guitarGear;
