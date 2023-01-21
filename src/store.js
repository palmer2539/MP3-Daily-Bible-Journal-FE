import { combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools} from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import { userLoginReducer, userSignupReducer } from './reducers/userReducers';
import { entryListReducer, entryMakeReducer, entryUpdateReducer } from "./reducers/entryReducer";





const reducer = combineReducers({
  userLogin: userLoginReducer,
  userSignup: userSignupReducer,
  entryList: entryListReducer,
  entryMake: entryMakeReducer,
  entryUpdate: entryUpdateReducer
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null

const initialState = {
  userLogin : { userInfo: userInfoFromStorage }
};

console.log(userInfoFromStorage)

const middleware = [thunk];

const store = configureStore(
  {reducer},
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

console.log(initialState)

export default store;

