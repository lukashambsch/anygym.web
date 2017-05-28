// @flow
import { call, put, takeLatest, fork } from 'redux-saga/effects';

import memberApi from './api';
import { REQUEST_MEMBERS } from './actions';
import { receiveMembers, failMemberRequest } from './actions';

export function* getMembers(action: Object): any {
  try {
    const members = yield call(memberApi.getMembers);

    yield put(receiveMembers(members));
  } catch(e) {
    yield put(failMemberRequest(e));
  }
}

export function* getMembersSaga(): any {
  yield takeLatest(REQUEST_MEMBERS, getMembers);
}

function* memberSaga(): any {
  yield [
    fork(getMembersSaga)
  ];
}

export default memberSaga;
