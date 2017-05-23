// @flow
import { push } from 'react-router-redux';
import { call, put, takeLatest, fork } from 'redux-saga/effects';

import authApi from './api';
import { REQUEST_TOKEN, REQUEST_REGISTER, REQUEST_USER, CHECK_FOR_TOKEN } from './actions';
import {
  requestToken,
  registerSuccess,
  authenticateSuccess,
  authenticateFailure,
  receiveUser,
  requestUser
} from './actions';

export function* getToken(action: Object): any {
  try {
    const token = yield call(authApi.getToken, action.user);

    yield put(authenticateSuccess(token));
    yield put(requestUser(action.user.email));
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

export function* getUser(action: Object): any {
  try {
    const user = yield call(authApi.getUser, action.email);

    yield put(receiveUser(user));
  } catch(e) {
    yield put(authenticateFailure(e));
  }
}

export function* callRequestUser(action: Object): any {
  try {
    yield put(requestUser(action.email));
  } catch(e) {
  }
}

export function* getTokenSaga(): any {
  yield takeLatest(REQUEST_TOKEN, getToken);
}

export function* registerUserSaga(): any {
  yield takeLatest(REQUEST_REGISTER, registerUser);
}

export function* getUserSaga(): any {
  yield takeLatest(REQUEST_USER, getUser);
}

export function* requestUserSaga(): any {
  yield takeLatest(CHECK_FOR_TOKEN, callRequestUser);
}

function* authSaga(): any {
  yield [
    fork(getTokenSaga),
    fork(registerUserSaga),
    fork(getUserSaga),
    fork(requestUserSaga)
  ];
}

export default authSaga;
