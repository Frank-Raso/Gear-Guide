import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import profileGear from './profileGear.reducer';
import allGear from './allGear.reducer';
import eachGear from './eachGear.reducer';
import ampGear from './ampGear.reducer';
import guitarGear from './guitarGear.reducer';
import accessoriesGear from './accessoriesGear.reducer';
import imageReducer from './image.reducer';
import imageEditReducer from './imageEdit.reducer';
import collection from './collection.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  profileGear, // will have an array of objects if someone is logged in
  allGear,
  eachGear,
  ampGear,
  guitarGear,
  accessoriesGear,
  imageReducer,
  imageEditReducer,
  collection,
});

export default rootReducer;
