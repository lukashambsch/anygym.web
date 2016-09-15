import React from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import { fetchVisits } from './actions'

const loggerMiddleware = createLogger()

const preloadedState = {
  visits: {
    isFetching: false,
    visibilityFilter: 'SHOW_ALL',
    items: []
  },
  statuses: {
    1: {
      status_id: 1,
      status_name: 'Pending'
    },
    2: {
      status_id: 2,
      status_name: 'Approved'
    },
    3: {
      status_id: 3,
      status_name: 'Denied'
    }
  },
  members: {
    1: {
      member_id: 1,
      first_name: 'Lukas',
      last_name: 'Hambsch'
    },
    2: {
      member_id: 2,
      first_name: 'McKenzie',
      last_name: 'Hambsch'
    }
  }
}

const store = createStore(reducer, preloadedState, applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
))

store.dispatch(fetchVisits())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
