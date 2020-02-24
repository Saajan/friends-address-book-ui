import { combineReducers } from "redux";
import { userListReducer } from "../components/UserList/userListReducer";
import { addressListReducer } from "../components/AddressList/addressListReducer";

const rootReducer = combineReducers({
  userList: userListReducer,
  addressList: addressListReducer
});

export default rootReducer;
