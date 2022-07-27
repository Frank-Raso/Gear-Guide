import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';





function* deleteGear(action) {
    console.log('in getGear', action.payload);
    try {
        const response = yield axios.delete(`api/profile/gear/${action.payload}`);
        console.log('deleteGear:', response.data);
        // yield put({ type: 'EACH_GEAR', payload: response.data });
    } catch {
        console.log('err cannot get GEAR');
    }
}

function* deleteSaga() {
    yield takeLatest('DELETE_GEAR', deleteGear);

}

export default deleteSaga;
