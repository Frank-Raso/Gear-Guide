import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchRocks() {
  // get all the likes from the database
  try {
    const response = yield axios.get(`api/rocks/all`);
    console.log('IN allRocksSaga', response.data);
    yield put({ type: 'ALL_ROCKS', payload: response.data});
  } catch {
    console.log('IT ALL ROCKS error');
  }
}

function* allRocksSaga() {
    yield takeLatest('FETCH_ROCKS', fetchRocks);
  }
  
  export default allRocksSaga;
  