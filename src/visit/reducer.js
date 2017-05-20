// @flow
import {
  REQUEST_VISITS,
  RECEIVE_VISITS,
  UPDATE_VISIT,
  FAIL_VISIT_REQUEST,
  REQUEST_VISIT,
  RECEIVE_VISIT
} from './actions';
import type { Visit } from './types';

type State = {
  isFetching: boolean;
  visibilityFilter: string;
  items: Object;
  visit: ?Visit;
  error: ?Error;
};

export const initialState: State = {
  isFetching: false,
  visibilityFilter: 'SHOW_ALL',
  items: {},
  visit: {
    visit_id: 0,
    member_id: 0,
    gym_location_id: 0,
    status_id: 0,
    created_on: '',
    modified_on: ''
  },
  error: null
};

const visits = (state: State = initialState, action: Object) => {
  let items = {};

  switch (action.type) {
    case REQUEST_VISITS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_VISITS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.visits,
        lastUpdated: action.receivedAt
      });
    case RECEIVE_VISIT:
      return Object.assign({}, state, {
        isFetching: false,
        visit: action.visit
      });
    case UPDATE_VISIT:
      items = Object.assign(state.items, {});

      items[action.visit.visit_id] = action.visit;

      return Object.assign({}, state, {
        items: items
      });
    case FAIL_VISIT_REQUEST:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    case REQUEST_VISIT:
      return Object.assign({}, state, {
        isFetching: true
      });
    default:
      return state;
  }
}

export default visits;
