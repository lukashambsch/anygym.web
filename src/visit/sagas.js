import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'

import { CREATE_VISIT, REQUEST_VISITS } from './actions'
import { receiveVisits, createVisitSuccess } from './actions'

function fetchVisitsAPI() {
  return axios.get('/visits')
    .then(response => response.data)
}

function createVisitAPI(visit) {
  return axios.post('/visits', visit)
    .then(response => response.data)
}

function* createVisit(action) {
  try {
    yield call(createVisitAPI, action.visit)
    yield put(createVisitSuccess())
  } catch(e) {
    console.log(e)
  }
}

function* fetchVisits(action) {
  try {
    const visits = yield call(fetchVisitsAPI)

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
