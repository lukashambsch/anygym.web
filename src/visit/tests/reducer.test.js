import reducer, { initialState } from '../reducer';
import {
  REQUEST_VISITS,
  RECEIVE_VISITS,
  UPDATE_VISIT,
  FAIL_VISIT_REQUEST,
  REQUEST_VISIT,
  RECEIVE_VISIT
} from '../actions';

describe('visit reducer', () => {

  it('should return the initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle REQUEST_VISITS', () => {
    const action = { type: REQUEST_VISITS };
    const nextState = reducer(initialState, action);

    expect(nextState.isFetching).toBe(true);
  });

  it('should handle RECEIVE_VISITS', () => {
    const date = new Date();
    const action = {
      type: RECEIVE_VISITS,
      visits: { 1: { visit_id: 1 }, 2: { visit_id: 2 } },
      receivedAt: date
    };
    const nextState = reducer(initialState, action);

    expect(nextState.isFetching).toBe(false);
    expect(nextState.items).toEqual(action.visits);
    expect(nextState.lastUpdated).toEqual(action.receivedAt);
  })

  it('should handle RECEIVE_VISIT', () => {
    const action = {
      type: RECEIVE_VISIT,
      visit: { visit_id: 1 }
    };
    const nextState = reducer(initialState, action);

    expect(nextState.isFetching).toBe(false);
    expect(nextState.visit).toEqual(action.visit);
  });

  it('should handle UPDATE_VISIT', () => {
    const state = Object.assign({}, initialState, { visit: { visit_id: 1, member_id: 1 } });
    const action = {
      type: UPDATE_VISIT,
      visit: {
        visit_id: 1,
        member_id: 2
      }
    };
    const nextState = reducer(state, action);

    expect(nextState.items[1].member_id).toEqual(2);
  });

  it('should handle FAIL_VISIT_REQUEST', () => {
    const action = {
      type: FAIL_VISIT_REQUEST,
      error: Error('test error')
    };
    const nextState = reducer(initialState, action);

    expect(nextState.error).toEqual(action.error);
  });

  it('should handle REQUEST_VISIT', () => {
    const action = { type: REQUEST_VISIT };
    const nextState = reducer(initialState, action);

    expect(nextState.isFetching).toBe(true);
  });

});
