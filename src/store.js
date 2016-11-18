import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import visitSaga from './visit/sagas'

const loggerMiddleware = createLogger()
const reduxRouterMiddleware = routerMiddleware(browserHistory)
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer, applyMiddleware(
  thunkMiddleware,
  loggerMiddleware,
  reduxRouterMiddleware,
  sagaMiddleware
))

sagaMiddleware.run(visitSaga)
