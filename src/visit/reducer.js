import {
  REQUEST_VISITS,
  RECEIVE_VISITS,
  UPDATE_VISIT,
  FAIL_VISIT_REQUEST
} from './actions'

const visits = (state = {
  isFetching: false,
  visibilityFilter: 'SHOW_ALL',
  items: {},
  error: null
}, action) => {
  let items = {}
  switch (action.type) {
    case REQUEST_VISITS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_VISITS:
      action.visits.forEach((visit) => {
        items[visit.visit_id] = visit
      })

      return Object.assign({}, state, {
        isFetching: false,
        items: items,
        lastUpdated: action.recievedAt
      })
    case UPDATE_VISIT:
      state.items[action.visit.visit_id] = action.visit

      return Object.assign({}, state, {
        items: state.items
      })
    case FAIL_VISIT_REQUEST:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      })
    default:
      return state
  }
}

export default visits
