import { createRoutine } from "redux-saga-routines";

export const GET_USER_LIST = "GET_USER_LIST";
export const GET_USER_ADDRESS_LIST = "GET_USER_ADDRESS_LIST";

export const getUserList = createRoutine(GET_USER_LIST);
export const getAddressList = createRoutine(GET_USER_ADDRESS_LIST);
