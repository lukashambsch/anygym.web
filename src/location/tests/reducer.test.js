import reducer, { initialState } from '../reducer';
import { REQUEST_LOCATIONS, FAIL_LOCATION_REQUEST, RECEIVE_LOCATIONS } from '../actions';
import { gymLocations } from '../../mocks';

describe('location reducer', () => {

  it('should return the initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle REQUEST_LOCATIONS', () => {
    const action = { type: REQUEST_LOCATIONS };
    const nextState = reducer(initialState, action);

    expect(nextState.isFetching).toBe(true);
  });

  it('should handle RECEIVE_LOCATIONS', () => {
    const date = new Date();
    const action = {
      type: RECEIVE_LOCATIONS,
      locations: Object.values(gymLocations),
      receivedAt: date
    };
    const nextState = reducer(initialState, action);

    expect(nextState.isFetching).toBe(false);
    expect(nextState.items).toEqual(action.locations);
    expect(nextState.lastUpdated).toEqual(action.receivedAt);
  });

  it('should handle FAIL_LOCATION_REQUEST', () => {
    const action = {
      type: FAIL_LOCATION_REQUEST,
      error: Error('test error')
    };
    const nextState = reducer(initialState, action);

    expect(nextState.error).toEqual(action.error);
  });

});

