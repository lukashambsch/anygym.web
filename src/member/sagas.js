import { call, put, takeLatest, fork } from 'redux-saga/effects';

import memberApi from './api';
import { REQUEST_MEMBERS } from './actions';
import { receiveMembers, failMemberRequest } from './actions';

function* getMembers(action) {
  try {
    const members = yield call(memberApi.getMembers);

    yield put(receiveMembers(members));
  } catch(e) {
    yield put(failMemberRequest(e));
  }
}

function* getMembersSaga() {
  yield takeLatest(REQUEST_MEMBERS, getMembers);
}

function* memberSaga() {
  yield [
    fork(getMembersSaga)
  ];
}

export default memberSaga;
