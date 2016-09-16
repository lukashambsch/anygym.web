import React from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import { fetchVisits } from './actions/visits'
import { fetchStatuses } from './actions/statuses'
import { fetchMembers } from './actions/members'

const loggerMiddleware = createLogger()

const store = createStore(reducer, applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
))

store.dispatch(fetchVisits())
store.dispatch(fetchStatuses())
store.dispatch(fetchMembers())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
