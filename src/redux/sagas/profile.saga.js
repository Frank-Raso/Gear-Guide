import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchProfileGear() {
  // get all gear from the DB
  try {
    const gear = yield axios.get('/api/profile');
    console.log('get all:', gear.data);
    yield put({ type: 'SET_PGEAR', payload: gear.data });
  } catch {
    console.log('get all error');
  }
}

function* profileSaga() {
  yield takeLatest('FETCH_GEAR', fetchProfileGear);
}

export default profileSaga;
