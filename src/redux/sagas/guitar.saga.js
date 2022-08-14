import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchGuitarGear() {
  // get all gear from the DB
  try {
    const gear = yield axios.get("/api/guitars");
    console.log("get all:", gear.data);
    yield put({ type: "SET_GUITARS", payload: gear.data });
  } catch {
    console.log("get all error");
  }
}

function* guitarSaga() {
  yield takeLatest("FETCH_GUITARS", fetchGuitarGear);
}

export default guitarSaga;
