import { call, put, takeLatest } from 'redux-saga/effects'

import memberApi from './api'
import { REQUEST_MEMBERS } from './actions'
import { receiveMembers } from './actions'

function* getMembers(action) {
  try {
    const members = yield call(memberApi.getMembers)

    yield put(receiveMembers(members))
  } catch(e) {
    console.log(e)
  }
}

export function* getMembersSaga() {
  yield takeLatest(REQUEST_MEMBERS, getMembers)
}
