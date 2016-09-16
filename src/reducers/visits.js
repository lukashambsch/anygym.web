import { APPROVE_VISIT, DENY_VISIT, REQUEST_VISITS, RECEIVE_VISITS, UPDATE_VISIT } from '../actions/visits'

//const pendingId = 1
const approvedId = 2
const deniedIdentityId = 3
//const deniedBannedId = 4

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
      let items = {}
      action.visits.forEach((visit) => {
        items[visit.visit_id] = visit
      })

      return Object.assign({}, state, {
        isFetching: false,
        items: items,
        lastUpdated: action.recievedAt
      })
    case APPROVE_VISIT:
      state.items[action.visit_id].status_id = approvedId

      return Object.assign({}, state, {
        items: state.items
      })
    case DENY_VISIT:
      state.items[action.visit_id].status_id = deniedIdentityId

      return Object.assign({}, state, {
        items: state.items
      })
    case UPDATE_VISIT:
      state.items[action.visit.visit_id] = action.visit

      return Object.assign({}, state, {
        items: state.items
      })
    default:
      return state
  }
}

export default visits
