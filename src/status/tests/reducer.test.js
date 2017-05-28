import reducer, { initialState } from '../reducer';
import { REQUEST_STATUSES, FAIL_STATUS_REQUEST, RECEIVE_STATUSES } from '../actions';
import { statuses } from '../../mocks';

describe('status reducer', () => {

  it('should return the initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle REQUEST_STATUSES', () => {
    const action = { type: REQUEST_STATUSES };
    const nextState = reducer(initialState, action);

    expect(nextState.isFetching).toBe(true);
  });

  it('should handle RECEIVE_STATUSES', () => {
    const date = new Date();
    const action = {
      type: RECEIVE_STATUSES,
      statuses: Object.values(statuses),
      receivedAt: date
    };
    const nextState = reducer(initialState, action);

    expect(nextState.isFetching).toBe(false);
    expect(nextState.items).toEqual(action.statuses);
    expect(nextState.lastUpdated).toEqual(action.receivedAt);
  });

  it('should handle FAIL_STATUS_REQUEST', () => {
    const action = {
      type: FAIL_STATUS_REQUEST,
      error: Error('test error')
    };
    const nextState = reducer(initialState, action);

    expect(nextState.error).toEqual(action.error);
  });

});
