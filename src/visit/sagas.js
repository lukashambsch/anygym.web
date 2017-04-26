import { call, put, takeLatest, fork } from 'redux-saga/effects'

import visitApi from './api'
import { CREATE_VISIT, UPDATE_VISIT, REQUEST_VISITS } from './actions'
import { receiveVisits, createVisitSuccess, updateVisitSuccess, failVisitRequest } from './actions'

function* createVisit(action) {
  try {
    yield call(visitApi.createVisit, action.visit)
    yield put(createVisitSuccess())
  } catch(e) {
    yield put(failVisitRequest(e))
  }
}

function* updateVisit(action) {
  try {
    yield call(visitApi.updateVisit, action.visit)
    yield put(updateVisitSuccess())
  } catch(e) {
    yield put(failVisitRequest(e))
  }
}

function* fetchVisits(action) {
  try {
    const visits = yield call(visitApi.getVisits)

    yield put(receiveVisits(visits))
  } catch(e) {
    yield put(failVisitRequest(e))
  }
}

function* getVisitsSaga() {
  yield takeLatest(REQUEST_VISITS, fetchVisits)
}

function* createVisitSaga() {
  yield takeLatest(CREATE_VISIT, createVisit)
}

function* updateVisitSaga() {
  yield takeLatest(UPDATE_VISIT, updateVisit)
}

function* visitSaga() {
  yield [
    fork(getVisitsSaga),
    fork(createVisitSaga),
    fork(updateVisitSaga)
  ]
}

export default visitSaga
