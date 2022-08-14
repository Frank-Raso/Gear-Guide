import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchAllGear() {
  // get all gear from the DB
  try {
    const gear = yield axios.get("/api/all");
    console.log("get all:", gear.data);
    yield put({ type: "SET_GEAR", payload: gear.data });
  } catch {
    console.log("get all error");
  }
}

function* allSaga() {
  yield takeLatest("FETCH_ALLGEAR", fetchAllGear);
}

export default allSaga;
