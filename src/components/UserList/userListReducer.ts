import { getUserList } from "../../actions";

const initialState = {
  loading: false,
  data: {},
  error: ""
};

export const userListReducer = (
  state = initialState,
  { type, payload }: any
) => {
  switch (type) {
    case getUserList.TRIGGER:
      return {
        ...state,
        loading: true
      };
    case getUserList.SUCCESS:
      return {
        ...state,
        data: payload
      };
    case getUserList.FAILURE:
      return {
        ...state,
        error: payload
      };
    case getUserList.FULFILL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
