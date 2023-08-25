import { combineReducers } from 'redux';
import accessoriesGear from './accessoriesGear.reducer';
import allGear from './allGear.reducer';
import ampGear from './ampGear.reducer';
import collection from './collection.reducer';
import eachGear from './eachGear.reducer';
import errors from './errors.reducer';
import guitarGear from './guitarGear.reducer';
import imageEditReducer from './imageEdit.reducer';
import imageReducer from './image.reducer';
import profileGear from './profileGear.reducer';
import rocks from './rocks.reducer';
import user from './user.reducer';
import follow from './follow.reducer';
import allFollowers from './allFollowers.reducer';
import allRocks from './allRocks.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
accessoriesGear,
allGear,
ampGear,
collection,
eachGear,
errors, // contains registrationMessage and loginMessage
guitarGear,
imageEditReducer,
imageReducer,
profileGear, // will have an array of objects if someone is logged in
rocks,
user, // will have an id and username if someone is logged in
follow,
allFollowers,
allRocks,
});

export default rootReducer;
