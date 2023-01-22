import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools} from "redux-devtools-extension";
import { 
  userLoginReducer, 
  userSignupReducer, 
  userUpdateReducer 
} from './reducers/userReducers';
import { 
  entryDeleteReducer, 
  entryListReducer, 
  entryMakeReducer, 
  entryUpdateReducer 
} from "./reducers/entryReducer";


const reducer = combineReducers({
  userLogin: userLoginReducer,
  userSignup: userSignupReducer,
  userUpdate: userUpdateReducer,
  entryList: entryListReducer,
  entryMake: entryMakeReducer,
  entryUpdate: entryUpdateReducer,
  entryDelete: entryDeleteReducer
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin : { userInfo: userInfoFromStorage }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);


export default store;

