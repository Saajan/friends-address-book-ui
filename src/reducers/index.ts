import { combineReducers } from "redux";
import { userListReducer } from "./userListReducer";
import { addressListReducer } from "./addressListReducer";
import { currentUserReducer } from "./currentUserReducer";

const rootReducer = combineReducers({
  userList: userListReducer,
  currentUser: currentUserReducer,
  addressList: addressListReducer
});

export default rootReducer;
