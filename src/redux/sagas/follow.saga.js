import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* follow(action) {
  console.log('in followSaga', action.payload);
  try {
    const response = yield axios.post('api/follow', action.payload);
    yield put({ type: 'SET_FOLLOW', payload: response.data });
    // Fetch updated list of followers
    yield put({ type: 'FETCH_FOLLOWERS' });
    console.log('FollowSagResponse:', response);
  } catch {
    console.log('err cannot put followSaga');
    alert('error Putting FollowSaga');
  }
}

function* followSaga() {
  yield takeLatest('FOLLOW_USER', follow);
}

export default followSaga;
