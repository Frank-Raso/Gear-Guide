import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* notRocks(action) {
  // toggle the 'does it rock' status
  console.log('IN UNLIKESAGA', action.payload);
  try {
    yield axios.delete('api/unLike', {data: action.payload});
    yield put({ type: 'FETCH_ROCKS' });
  } catch {
    console.log('IN UNLIKE SAGA error');
  }
}

function* unLikeSaga() {
  yield takeLatest('NOT_ROCKS', notRocks);
}

export default unLikeSaga;
