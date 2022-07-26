import { combineReducers } from 'redux';


const ampGear = (state = [], action) => {
    switch (action.type) {
        case 'SET_AMPS':
            return action.payload;
        default:
            return state;
    }
}
export default ampGear;