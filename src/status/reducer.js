import { REQUEST_STATUSES, FAIL_STATUS_REQUEST, RECEIVE_STATUSES } from './actions'

const statuses = (state = {
  isFetching: false,
  items: {},
  error: null
}, action) => {
  switch (action.type) {
    case REQUEST_STATUSES:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_STATUSES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.statuses,
        lastUpdated: action.receivedAt
      })
    case FAIL_STATUS_REQUEST:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      })
    default:
      return state
  }
}

export default statuses
