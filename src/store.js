import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import reducer from './reducers'

const loggerMiddleware = createLogger()
const reduxRouterMiddleware = routerMiddleware(browserHistory)

export const store = createStore(reducer, applyMiddleware(
  thunkMiddleware,
  loggerMiddleware,
  reduxRouterMiddleware
))
