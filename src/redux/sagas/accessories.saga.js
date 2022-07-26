import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchAccessoriesGear() {
  // get all gear from the DB
  try {
    const gear = yield axios.get('/api/accessories');
    console.log('get all:', gear.data);
    yield put({ type: 'SET_ACCESSORIES', payload: gear.data });

  } catch {
    console.log('get all error');
  }

}



function* accessoriesSaga() {
  yield takeLatest('FETCH_ACCESSORIES', fetchAccessoriesGear);

}

export default accessoriesSaga;
