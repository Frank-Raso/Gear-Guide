import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* toggleRocks(action) {
  // toggle the 'does it rock' status
  try {
    const response = yield axios.post('api/rocks', action.payload );
    console.log('IN rocksSaga', response);
    yield put({ type: 'FETCH_ROCKS' });
  } catch {
    console.log('IT ROCKS error');
  }
}

function* rocksSaga() {
    yield takeLatest('ROCKS', toggleRocks);
  }
  
  export default rocksSaga;
  