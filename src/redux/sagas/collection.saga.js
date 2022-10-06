import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchCollection() {
  try {
    const gear = yield axios.get("/api/collection");
    console.log("get collection:", gear.data);
    yield put({ type: "SET_COLLECTION", payload: gear.data });
  } catch {
    console.log("get collection error");
  }
}

function* collectionSaga() {
  yield takeLatest("FETCH_COLLECTION", fetchCollection);
}

export default collectionSaga;
