// @flow
import { push } from 'react-router-redux';
import { call, put, takeLatest, fork } from 'redux-saga/effects';

import authApi from './api';
import { REQUEST_TOKEN, REQUEST_REGISTER } from './actions';
import { requestToken, registerSuccess, authenticateSuccess, authenticateFailure } from './actions';

export function* getToken(action: Object): any {
  try {
    const token = yield call(authApi.getToken, action.user);

    yield put(authenticateSuccess(token));
    yield put(push('/gym/visits'));
  } catch(e) {
    yield put(authenticateFailure(e));
    console.log(e);
  }
}

export function* registerUser(action: Object): any {
  try {
    const token = yield call(authApi.register, action.user);

    yield put(registerSuccess(token));
    yield put(requestToken(action.user));
  } catch(e) {
    console.log(e);
  }
}

export function* getTokenSaga(): any {
  yield takeLatest(REQUEST_TOKEN, getToken);
}

export function* registerUserSaga(): any {
  yield takeLatest(REQUEST_REGISTER, registerUser);
}

function* authSaga(): any {
  yield [
    fork(getTokenSaga),
    fork(registerUserSaga)
  ];
}

export default authSaga;
