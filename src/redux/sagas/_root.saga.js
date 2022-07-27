import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import profileSaga from './profile.saga';
import allSaga from './all.saga';
import gearSaga from './gear.saga';
import ampSaga from './amp.saga';
import guitarSaga from './guitar.saga';
import accessoriesSaga from './accessories.saga';
import deleteSaga from './deleteGear.saga';
import editSaga from './edit.saga';
// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    profileSaga(),
    allSaga(),
    gearSaga(),
    ampSaga(),
    guitarSaga(),
    accessoriesSaga(),
    deleteSaga(),
    editSaga(),
  ]);
}
