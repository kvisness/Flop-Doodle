import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import admin from './admin.reducer';
import currentWords from './currentGame.reducer';
import games from './games.reducer';
import missedWords from './missedWords.reducer';
import correctWords from './correctWords.reducer';
import wordLength from './wordLength.reducer';
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user,
  // admin: admin, // <--- same as below
  admin, // will have an id and username if someone is logged in
  currentWords,
  games,
  missedWords,
  correctWords,
  wordLength
});
//this.props.store.errors.loginMessage is an example how to use in code.
export default rootReducer;
