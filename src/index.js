import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

const preloadedState = {
  visibilityFilter: 'SHOW_ALL',
  visits: [
    {
      visit_id: 1,
      member_id: 1,
      status_id: 1,
      created_on: '9/14/2016 12:20PM',
      modified_on: ''
    }
  ],
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
    }
  }
}
const store = createStore(reducer, preloadedState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
