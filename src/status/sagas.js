import { call, put, takeLatest, fork } from 'redux-saga/effects'

import statusApi from './api'
import { REQUEST_STATUSES, receiveStatuses } from './actions'

function* getStatuses(action) {
  try {
    const statuses = yield call(statusApi.getStatuses)

    yield put(receiveStatuses(statuses))
  } catch(e) {
    console.log(e)
  }
}

function* getStatusesSaga() {
  yield takeLatest(REQUEST_STATUSES, getStatuses)
}

function* statusSaga() {
  yield [
    fork(getStatusesSaga)
  ]
}

export default statusSaga
