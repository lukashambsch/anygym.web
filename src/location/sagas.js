import { call, put, takeLatest } from 'redux-saga/effects'

import locationApi from './api'
import { REQUEST_LOCATIONS } from './actions'
import { receiveLocations } from './actions'

function* getLocations(action) {
  try {
    const locations = yield call(locationApi.getLocations)

    yield put(receiveLocations(locations))
  } catch(e) {
    console.log(e)
  }
}

export function* getLocationsSaga() {
  yield takeLatest(REQUEST_LOCATIONS, getLocations)
}
