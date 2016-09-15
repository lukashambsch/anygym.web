import { APPROVE_VISIT, DENY_VISIT, REQUEST_VISITS, RECEIVE_VISITS } from '../actions'

const visit = (state, action) => {
  switch (action.type) {
    case APPROVE_VISIT:
      if (state.visit_id === action.visit_id) {
        state.status_id = 2
      }
      return {
        ...state
      }
    case DENY_VISIT:
      if (state.visit_id === action.visit_id) {
        state.status_id = 3
      }
      return {
        ...state
      }
    default:
      return state
  }
}

const visits = (state = {
  isFetching: false,
  visibilityFilter: 'SHOW_ALL',
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_VISITS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_VISITS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.visits,
        lastUpdated: action.recievedAt
      })
    case APPROVE_VISIT:
      return Object.assign({}, state, {
        items: state.items.map(v => visit(v, action))
      })
    case DENY_VISIT:
      return Object.assign({}, state, {
        items: state.items.map(v => visit(v, action))
      })
    default:
      return state
  }
}

export default visits
