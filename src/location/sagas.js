// @flow
import { call, put, takeLatest, fork } from 'redux-saga/effects'

import locationApi from './api'
import { REQUEST_LOCATIONS } from './actions'
import { receiveLocations, failLocationRequest } from './actions'

export function* getLocations(action: Object): any {
  try {
    const locations = yield call(locationApi.getLocations)

    yield put(receiveLocations(locations))
  } catch(e) {
    yield put(failLocationRequest(e))
  }
}

export function* getLocationsSaga(): any {
  yield takeLatest(REQUEST_LOCATIONS, getLocations)
}

function* locationSaga(): any {
  yield [
    fork(getLocationsSaga)
  ]
}

export default locationSaga
