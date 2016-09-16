import { REQUEST_MEMBERS, RECEIVE_MEMBERS } from '../actions/members'

const members = (state = {
  isFetching: false,
  items: {}
}, action) => {
  switch (action.type) {
    case REQUEST_MEMBERS:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_MEMBERS:
      let items = {}
      action.members.forEach((member) => {
        items[member.member_id] = member
      })

      return Object.assign({}, state, {
        isFetching: false,
        items: items,
        lastUpdated: action.recievedAt
      })
    default:
      return state
  }
}

export default members
