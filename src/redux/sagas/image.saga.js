import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* imageUpload(action) {
  // upload images to cloudinary
  try {
        console.log(action.payload);
        const response = yield axios.post('/api/upload', action.payload);
        console.log('response:', response.data);
        yield put({ type: 'SET_IMAGE', payload: response.data.url });
        console.log('TESTINGGGG,', response.data.url);
    } catch (err) {
        console.log('error:', err);
    }
}

function* imageSaga() {
  yield takeLatest('UPLOAD_IMAGE', imageUpload);
}

export default imageSaga;