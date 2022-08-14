import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* SendEditImage(action) {
  console.log("IMAGE SAGA PRE-LOG", action.payload);
  try {
    const response = yield axios.post("/api/uploadEditImage", action.payload);
    console.log("In the image saga:", response.data);
    yield put({ type: "SET_EDITIMAGE", payload: response.data });
  } catch (err) {
    console.log("Error adding image_Saga to DB:", err);
    alert("Error adding Image Saga from DB");
  }
}

function* sendEditImageSaga() {
  yield takeLatest("SEND_EDITIMAGE", SendEditImage);
}

export default sendEditImageSaga;
