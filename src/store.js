import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'

import reducer from './reducers'
import { visitSaga, createVisitSaga } from './visit/sagas'
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
  thunkMiddleware,
  sagaMiddleware
))

sagaMiddleware.run(visitSaga)
sagaMiddleware.run(createVisitSaga)
sagaMiddleware.run(getLocationsSaga)
sagaMiddleware.run(getTokenSaga)
sagaMiddleware.run(registerUserSaga)
sagaMiddleware.run(getStatusesSaga)
sagaMiddleware.run(getMembersSaga)
