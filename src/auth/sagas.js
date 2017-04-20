import { push } from 'react-router-redux'
import { call, put, takeLatest } from 'redux-saga/effects'

import authApi from './api'
import { REQUEST_TOKEN, REQUEST_REGISTER } from './actions'
import { requestToken, registerSuccess, authenticateSuccess } from './actions'

function* getToken(action) {
  try {
    const token = yield call(authApi.getToken, action.user)

    yield put(authenticateSuccess(token))
    yield put(push('/gym/visits'))
  } catch(e) {
    console.log(e)
  }
}

function* registerUser(action) {
  try {
    const token = yield call(authApi.register, action.user)

    yield put(registerSuccess(token))
    yield put(requestToken(action.user))
  } catch(e) {
    console.log(e)
  }
}

export function* getTokenSaga() {
  yield takeLatest(REQUEST_TOKEN, getToken)
}

export function* registerUserSaga() {
  yield takeLatest(REQUEST_REGISTER, registerUser)
}
