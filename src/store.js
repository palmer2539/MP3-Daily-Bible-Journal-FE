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
  : null;

const initialState = {
  userLogin : { userInfo: userInfoFromStorage }
};

console.log(userInfoFromStorage)

// const thunkMiddleware = [thunk];

// const composedEnhancer = composeWithDevTools(applyMiddleware(middleware));

// export default function configureStore(initialState) {
//   const middlewares = [loggerMiddleware, thunkMiddleware]
//   const middlewareEnhancer = applyMiddleware(...middlewares)

//   const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
//   const composedEnhancers = compose(...enhancers)

//   const store = createStore(reducer, initialState, composedEnhancers)

//   return store
// }





const store = configureStore({
  reducer: reducer,
  initialState
});

console.log(initialState)

export default store;

