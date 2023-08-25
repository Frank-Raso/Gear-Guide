import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* allFollow(action) {
  console.log('in followSaga', action.payload);
  try {
    const response = yield axios.get('api/follow/all');
    yield put({ type: 'SET_ALL_FOLLOW', payload: response.data});
    console.log('ALL FOLLOWERS caused by dispatch FETCH_FOLLOWERS/RESPONSE.DATA :', response.data);
  } catch {
    console.log('err cannot get all followers Saga');
    alert('error Getting allFollowSaga');
  }
}

function* allFollowSaga() {
  yield takeLatest('FETCH_FOLLOWERS', allFollow);
}

export default allFollowSaga;
