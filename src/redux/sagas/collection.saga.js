import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchCollection(action) {
  try {
    const gear = yield axios.get(`/api/collection/${action.payload}`);
    yield put({ type: 'SET_COLLECTION', payload: gear.data });
  } catch {
    console.log('get collection error');
  }
}

function* collectionSaga() {
  yield takeLatest('FETCH_COLLECTION', fetchCollection);
}

export default collectionSaga;
