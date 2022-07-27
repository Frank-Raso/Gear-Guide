
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';





function* editGear(action) {
    console.log('in editGear', action.payload);
    try {
        const response = yield axios.put('api/edit', action.payload);
        console.log('editGear:', response);
    } catch {
        console.log('err cannot edit .put GEAR');
        alert('error editing gear');
    }
}

function* editSaga() {
    yield takeLatest('EDIT_GEAR', editGear);

}

export default editSaga;
