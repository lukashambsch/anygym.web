import { call, put, takeLatest } from 'redux-saga/effects'

import visitApi from './api'
import { CREATE_VISIT, UPDATE_VISIT, REQUEST_VISITS } from './actions'
import { receiveVisits, createVisitSuccess, updateVisitSuccess } from './actions'

function* createVisit(action) {
  try {
    yield call(visitApi.createVisit, action.visit)
    yield put(createVisitSuccess())
  } catch(e) {
    console.log(e)
  }
}

function* updateVisit(action) {
  try {
    yield call(visitApi.updateVisit, action.visit)
    yield put(updateVisitSuccess())
  } catch(e) {
    console.log(e)
  }
}

function* fetchVisits(action) {
  try {
    const visits = yield call(visitApi.getVisits)

    yield put(receiveVisits(visits))
  } catch(e) {
    console.log(e)
  }
}

export function* visitSaga() {
  yield takeLatest(REQUEST_VISITS, fetchVisits)
}

export function* createVisitSaga() {
  yield takeLatest(CREATE_VISIT, createVisit)
}

export function* updateVisitSaga() {
  yield takeLatest(UPDATE_VISIT, updateVisit)
}
