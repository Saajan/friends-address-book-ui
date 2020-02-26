import { takeLatest, put, call } from "redux-saga/effects";

import { getUserList, getAddressList } from "../actions";
import { apiPostRequest, apiGetRequest } from "../api";
import { getErrorMessage } from "../utils/helper";

export function* getUserListSaga() {
  try {
    yield put(getUserList.request());
    const response = yield call(apiGetRequest, {
      endpoint: "/api/users"
    });
    yield put(getUserList.success(response));
  } catch (error) {
    put(getUserList.failure(getErrorMessage(error)));
  } finally {
    yield put(getUserList.fulfill());
  }
}

export function* getAddressListSaga({ payload: { fields } }: any) {
  try {
    yield put(getAddressList.request());
    const response = yield call(apiPostRequest, {
      fields,
      endpoint: "/api/user"
    });
    yield put(getAddressList.success(response));
  } catch (error) {
    put(getAddressList.failure(getErrorMessage(error)));
  } finally {
    yield put(getAddressList.fulfill());
  }
}

export default function* mySaga() {
  yield takeLatest(getUserList.TRIGGER, getUserListSaga);
  yield takeLatest(getAddressList.TRIGGER, getAddressListSaga);
}
