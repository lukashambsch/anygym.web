// @flow
import { REQUEST_LOCATIONS, RECEIVE_LOCATIONS, FAIL_LOCATION_REQUEST } from './actions';
import type { GymLocation } from './types';

type State = {
  isFetching: boolean;
  items: { [key: number]: GymLocation};
  error: ?Error;
};

export const initialState: State = {
  isFetching: false,
  items: {},
  error: null
};

const locations = (state: State = initialState, action: Object): State => {
  switch (action.type) {
    case REQUEST_LOCATIONS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_LOCATIONS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.locations,
        lastUpdated: action.receivedAt
      });
    case FAIL_LOCATION_REQUEST:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    default:
      return state;
  }
}

export default locations;
