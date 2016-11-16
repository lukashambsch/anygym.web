import { REQUEST_STATUSES, RECEIVE_STATUSES } from './actions'

const statuses = (state = {
  isFetching: false,
  items: {}
}, action) => {
  switch (action.type) {
    case REQUEST_STATUSES:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_STATUSES:
      var items = {}
      action.statuses.forEach((status) => {
        items[status.status_id] = status
      })

      return Object.assign({}, state, {
        isFetching: false,
        items: items,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export default statuses
