import { combineReducers } from "redux";

const accessoriesGear = (state = [], action) => {
  switch (action.type) {
    case "SET_ACCESSORIES":
      return action.payload;
    default:
      return state;
  }
};
export default accessoriesGear;
