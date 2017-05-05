// @flow
import { REQUEST_MEMBERS, RECEIVE_MEMBERS, FAIL_MEMBER_REQUEST } from './actions';

type State = {
  isFetching: boolean;
  items: Object;
  error: ?Error;
};

export const initialState: State = {
  isFetching: false,
  items: {},
  error: null
};

const members = (state: State = initialState, action: Object) => {
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
};

export default members;
