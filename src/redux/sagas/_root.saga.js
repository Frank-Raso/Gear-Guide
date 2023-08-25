import { all } from 'redux-saga/effects';
import accessoriesSaga from './accessories.saga';
import allSaga from './all.saga';
import ampSaga from './amp.saga';
import collectionSaga from './collection.saga';
import deleteSaga from './deleteGear.saga';
import editPutImageSaga from './editPutImage.saga';
import editSaga from './edit.saga';
import gearSaga from './gear.saga';
import guitarSaga from './guitar.saga';
import loginSaga from './login.saga';
import profileSaga from './profile.saga';
import registrationSaga from './registration.saga';
import rocksSaga from './rocks.saga';
import sendEditImageSaga from './imageEdit.saga';
import uploadImageSaga from './image.saga';
import userSaga from './user.saga';
import followSaga from './follow.saga';
import allFollowSaga from './allFollow.saga';
import unFollowSaga from './unFollow.saga';
import allRocksSaga from './allRocks.saga';
// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    accessoriesSaga(),
    allSaga(),
    ampSaga(),
    collectionSaga(),
    deleteSaga(),
    editPutImageSaga(),
    editSaga(),
    gearSaga(),
    guitarSaga(),
    loginSaga(),
    profileSaga(),
    registrationSaga(),
    rocksSaga(),
    sendEditImageSaga(),
    uploadImageSaga(),
    userSaga(),
    followSaga(),
    allFollowSaga(),
    unFollowSaga(),
    allRocksSaga(),
]);
}
