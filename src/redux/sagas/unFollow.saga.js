import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* unFollow(action) {
  console.log('in UN_FOLLOW_Saga', action.payload);
  try {
    yield axios.delete('api/unFollow', { data: action.payload });

    yield put({ type: 'FETCH_FOLLOWERS' });
  } catch {
    console.log('err cannot put followSaga');
    alert('error Putting FollowSaga');
  }
}

function* unFollowSaga() {
  yield takeLatest('UN_FOLLOW_USER', unFollow);
}

export default unFollowSaga;
