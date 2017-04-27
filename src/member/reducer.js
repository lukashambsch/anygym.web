import { REQUEST_MEMBERS, RECEIVE_MEMBERS, FAIL_MEMBER_REQUEST } from './actions';

const members = (state = {
  isFetching: false,
  items: {},
  error: null
}, action) => {
  switch (action.type) {
    case REQUEST_MEMBERS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_MEMBERS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.members,
        lastUpdated: action.recievedAt
      });
    case FAIL_MEMBER_REQUEST:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    default:
      return state;
  }
}

export default members;
