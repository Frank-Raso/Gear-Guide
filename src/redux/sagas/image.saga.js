import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* uploadImage(action) {
  console.log("IMAGE SAGA PRE-LOG", action.payload);
  try {
    const response = yield axios.post("/api/uploadImage", action.payload);
    console.log("In the image saga:", response.data);
    yield put({ type: "SET_IMAGE", payload: response.data });
  } catch (err) {
    console.log("Error adding image_Saga to DB:", err);
    alert("Error adding Image Saga from DB");
  }
}

function* uploadImageSaga() {
  yield takeLatest("SEND_IMAGE", uploadImage);
}

export default uploadImageSaga;
