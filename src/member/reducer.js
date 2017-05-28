// @flow
import { REQUEST_MEMBERS, RECEIVE_MEMBERS, FAIL_MEMBER_REQUEST } from './actions';
import type { Member } from './types';

type State = {
  isFetching: boolean;
  items: { [key: number]: Member };
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
        lastUpdated: action.receivedAt
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
