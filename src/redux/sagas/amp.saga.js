import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchAmpGear() {
  // get all gear from the DB
  try {
    const gear = yield axios.get('/api/amps');
    console.log('get all:', gear.data);
    yield put({ type: 'SET_AMPS', payload: gear.data });

  } catch {
    console.log('get all error');
  }

}

function* ampSaga() {
  yield takeLatest('FETCH_AMPS', fetchAmpGear);

}

export default ampSaga;
