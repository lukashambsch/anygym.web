import axios from 'axios'
import { takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import { REQUEST_VISITS } from './actions'
import { receiveVisits } from './actions'

function fetchVisitsAPI() {
  return axios.get('/visits')
    .then(response => response.data)
}

function* fetchVisits(action) {
  try {
    const visits = yield call(fetchVisitsAPI)
    yield put(receiveVisits(visits))
  } catch(e) {
    console.log(e)
  }
}

function* visitSaga() {
  yield* takeLatest(REQUEST_VISITS, fetchVisits)
}

export default visitSaga
