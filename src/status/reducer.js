// @flow
import { REQUEST_STATUSES, FAIL_STATUS_REQUEST, RECEIVE_STATUSES } from './actions';
import type { Status } from './types';

type State = {
  isFetching: boolean;
  items: Status[];
  error: ?Error;
};

export const initialState: State = {
  isFetching: false,
  items: [],
  error: null
};

const statuses = (state: State = initialState, action: Object) => {
  switch (action.type) {
    case REQUEST_STATUSES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_STATUSES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.statuses,
        lastUpdated: action.receivedAt
      });
    case FAIL_STATUS_REQUEST:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    default:
      return state;
  }
}

export default statuses;
