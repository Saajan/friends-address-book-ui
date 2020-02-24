import { getAddressList } from "../../actions";

const initialState = {
  loading: false,
  data: {},
  error: ""
};

export const addressListReducer = (
  state = initialState,
  { type, payload }: any
) => {
  switch (type) {
    case getAddressList.TRIGGER:
      return {
        ...state,
        loading: true
      };
    case getAddressList.SUCCESS:
      return {
        ...state,
        data: payload
      };
    case getAddressList.FAILURE:
      return {
        ...state,
        error: payload
      };
    case getAddressList.FULFILL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
