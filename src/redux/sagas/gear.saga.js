import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getGear(action) {
  console.log("in getGear", action.payload);
  try {
    const response = yield axios.get(`api/profile/gear/${action.payload}`);
    console.log("getGear:", response.data);
    yield put({ type: "EACH_GEAR", payload: response.data });
  } catch {
    console.log("err cannot get GEAR");
  }
}

function* gearSaga() {
  yield takeLatest("GEAR_CONT", getGear);
}

export default gearSaga;
