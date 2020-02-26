import { createRoutine } from "redux-saga-routines";

export type TCurrentUserAction = {
  type: "CURRENT_USER_ID";
  userId: number;
};

export const GET_USER_LIST = "GET_USER_LIST";
export const GET_USER_ADDRESS_LIST = "GET_USER_ADDRESS_LIST";
export const CURRENT_USER_ID = "CURRENT_USER_ID";

export const getUserList = createRoutine(GET_USER_LIST);

export const setCurrentUser = (userId: number): TCurrentUserAction => {
  return {
    type: CURRENT_USER_ID,
    userId
  };
};

export const getAddressList = createRoutine(GET_USER_ADDRESS_LIST);
