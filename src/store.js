import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'

import reducer from './reducers'
import { visitSaga, createVisitSaga } from './visit/sagas'

export const history = createHistory()
const loggerMiddleware = createLogger()
const reduxRouterMiddleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer, applyMiddleware(
  thunkMiddleware,
  loggerMiddleware,
  reduxRouterMiddleware,
  sagaMiddleware
))

sagaMiddleware.run(visitSaga)
sagaMiddleware.run(createVisitSaga)
