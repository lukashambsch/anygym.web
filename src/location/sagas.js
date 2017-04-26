import { call, put, takeLatest, fork } from 'redux-saga/effects'

import locationApi from './api'
import { REQUEST_LOCATIONS } from './actions'
import { receiveLocations, failLocationRequest } from './actions'

function* getLocations(action) {
  try {
    const locations = yield call(locationApi.getLocations)

    yield put(receiveLocations(locations))
  } catch(e) {
    yield put(failLocationRequest(e))
  }
}

function* getLocationsSaga() {
  yield takeLatest(REQUEST_LOCATIONS, getLocations)
}

function* locationSaga() {
  yield [
    fork(getLocationsSaga)
  ]
}

export default locationSaga
