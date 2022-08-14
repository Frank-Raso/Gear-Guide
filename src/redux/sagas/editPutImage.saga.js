import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* editPutImage(action) {
  console.log("in editGear", action.payload);
  try {
    const response = yield axios.put("api/edit/putimage", action.payload);
    console.log("editGear:", response);
  } catch {
    console.log("err cannot edit .put GEAR");
    alert("error editing gear");
  }
}

function* editPutImageSaga() {
  yield takeLatest("EDIT_PUTIMAGE", editPutImage);
}

export default editPutImageSaga;
