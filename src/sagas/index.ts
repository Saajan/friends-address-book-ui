import { takeLatest, put, call } from "redux-saga/effects";

import { getUserList, getAddressList } from "../actions";
import { apiPostRequest } from "../api";
import { getErrorMessage } from "../utils/helper";

export function* getUserListSaga({ payload: { fields } }: any) {
  try {
    yield put(getUserList.request());
    const response = yield call(apiPostRequest, {
      fields,
      endpoint: "/api/users"
    });
    if (response.responseStatus) {
      yield put(getUserList.success(response));
    } else {
      yield put(getUserList.failure(response));
    }
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
    if (response.responseStatus) {
      yield put(getAddressList.success(response));
    } else {
      yield put(getAddressList.failure(response));
    }
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
