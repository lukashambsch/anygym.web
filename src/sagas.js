import { fork } from 'redux-saga/effects'

import authSaga from './auth/sagas'
import visitSaga from './visit/sagas'
import locationSaga from './location/sagas'
import statusSaga from './status/sagas'
import memberSaga from './member/sagas'

function* rootSaga() {
  yield [
    fork(authSaga),
    fork(visitSaga),
    fork(locationSaga),
    fork(statusSaga),
    fork(memberSaga)
  ]
}

export default rootSaga
