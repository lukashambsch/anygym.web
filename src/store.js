import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'

import reducer from './reducers'
import rootSaga from './sagas'

export const history = createHistory()
const loggerMiddleware = createLogger()
const reduxRouterMiddleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer, applyMiddleware(
  loggerMiddleware,
  reduxRouterMiddleware,
  sagaMiddleware
))

sagaMiddleware.run(rootSaga)
