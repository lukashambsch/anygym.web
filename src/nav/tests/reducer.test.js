import reducer, { initialState } from '../reducer';
import { TOGGLE_MENU } from '../actions';

describe('nav reducer', () => {

  it('should return the initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle TOGGLE_MENU', () => {
    const action = { type: TOGGLE_MENU };
    const nextState = reducer(initialState, action);

    expect(nextState.isMenuVisible).toBe(true);
  });

});
