import reducer, { initialState } from '../reducer';
import {
  REQUEST_MEMBERS,
  RECEIVE_MEMBERS,
  FAIL_MEMBER_REQUEST
} from '../actions';

describe('member reducer', () => {

  it('should return the initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle REQUEST_MEMBERS', () => {
    const action = { type: REQUEST_MEMBERS };
    const nextState = reducer(initialState, action);

    expect(nextState.isFetching).toBe(true);
  });

  it('should handle RECEIVE_MEMBERS', () => {
    const date = new Date();
    const action = {
      type: RECEIVE_MEMBERS,
      members: { 1: { member_id: 1 }, 2: { member_id: 2 } },
      receivedAt: date
    };
    const nextState = reducer(initialState, action);

    expect(nextState.isFetching).toBe(false);
    expect(nextState.items).toEqual(action.members);
    expect(nextState.lastUpdated).toEqual(action.receivedAt);
  });

});
