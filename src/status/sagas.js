// @flow
import { call, put, takeLatest, fork } from 'redux-saga/effects';

import statusApi from './api';
import { REQUEST_STATUSES } from './actions';
import { receiveStatuses, failStatusRequest } from './actions';

export function* getStatuses(action: Object): any {
  try {
    const statuses = yield call(statusApi.getStatuses);

    yield put(receiveStatuses(statuses));
  } catch(e) {
    yield put(failStatusRequest(e));
  }
}

export function* getStatusesSaga(): any {
  yield takeLatest(REQUEST_STATUSES, getStatuses);
}

function* statusSaga(): any {
  yield [
    fork(getStatusesSaga)
  ];
}

export default statusSaga;
