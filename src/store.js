import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'

import reducer from './reducers'
import { visitSaga, createVisitSaga, updateVisitSaga } from './visit/sagas'
import { getTokenSaga, registerUserSaga } from './auth/sagas'
import { getLocationsSaga } from './location/sagas'
import { getStatusesSaga } from './status/sagas'
import { getMembersSaga } from './member/sagas'

export const history = createHistory()
const loggerMiddleware = createLogger()
const reduxRouterMiddleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer, applyMiddleware(
  loggerMiddleware,
  reduxRouterMiddleware,
  sagaMiddleware
))

sagaMiddleware.run(visitSaga)
sagaMiddleware.run(createVisitSaga)
sagaMiddleware.run(updateVisitSaga)
sagaMiddleware.run(getLocationsSaga)
sagaMiddleware.run(getTokenSaga)
sagaMiddleware.run(registerUserSaga)
sagaMiddleware.run(getStatusesSaga)
sagaMiddleware.run(getMembersSaga)
