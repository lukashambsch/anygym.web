import { REQUEST_LOCATIONS, RECEIVE_LOCATIONS } from './actions'

const locations = (state = {
  isFetching: false,
  items: {}
}, action) => {
  switch (action.type) {
    case REQUEST_LOCATIONS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_LOCATIONS:
      let items = {}
      action.locations.forEach((location) => {
        items[location.gym_location_id] = location
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

export default locations
