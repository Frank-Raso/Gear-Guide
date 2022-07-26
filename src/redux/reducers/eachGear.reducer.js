import { combineReducers } from 'redux';


const eachGear = (state = [], action) => {
    if (action.type === 'EACH_GEAR') {
        return action.payload;
    } else {
        return state;
    }
}
export default eachGear;