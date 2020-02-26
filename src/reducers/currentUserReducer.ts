import { CURRENT_USER_ID, TCurrentUserAction } from "../actions";

const initialState = null;

export const currentUserReducer = (
  state = initialState,
  { type, userId }: TCurrentUserAction
): number | null => {
  switch (type) {
    case CURRENT_USER_ID:
      return userId;
    default:
      return state;
  }
};
