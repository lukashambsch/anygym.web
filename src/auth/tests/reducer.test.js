import reducer, { initialState } from '../reducer';
import {
  SET_AUTH_SUCCESS,
  SET_AUTH_FAILURE,
  HANDLE_EMAIL_CHANGE,
  HANDLE_PASSWORD_CHANGE,
  HANDLE_PASSWORD_CONFIRM_CHANGE,
  REQUEST_TOKEN,
  CHECK_FOR_TOKEN,
  REQUEST_REGISTER,
  REGISTER_SUCCESS
} from '../actions';

describe('auth reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_AUTH_SUCCESS', () => {
    const action = {
      type: SET_AUTH_SUCCESS,
      token: 'test-token'
    };

    const nextState = reducer(initialState, action);

    expect(nextState.isAuthenticating).toBe(false);
    expect(nextState.authenticated).toBe(true);
    expect(nextState.token).toBe(action.token);
    expect(nextState.email).toBe('');
    expect(nextState.password).toBe('');
  });

  it('should handle SET_AUTH_FAILURE', () => {
    const action = { type: SET_AUTH_FAILURE };

    const nextState = reducer(initialState, action);

    expect(nextState.isAuthenticating).toBe(false);
    expect(nextState.authenticated).toBe(false);
    expect(nextState.token).toEqual('');
    expect(nextState.email).toEqual('');
    expect(nextState.password).toEqual('');
  });

  it('should handle HANDLE_EMAIL_CHANGE', () => {
    const action = {
      type: HANDLE_EMAIL_CHANGE,
      email: 'test@'
    };

    const nextState = reducer(initialState, action);

    expect(nextState.email).toEqual(action.email);
  });

  it('should handle HANDLE_PASSWORD_CHANGE', () => {
    const action = {
      type: HANDLE_PASSWORD_CHANGE,
      password: 'pass'
    };

    const nextState = reducer(initialState, action);

    expect(nextState.password).toEqual(action.password);
  });

  it('should handle HANDLE_PASSWORD_CONFIRM_CHANGE', () => {
    const action = {
      type: HANDLE_PASSWORD_CONFIRM_CHANGE,
      passwordConfirm: 'pass'
    };

    const nextState = reducer(initialState, action);

    expect(nextState.passwordConfirm).toEqual(action.passwordConfirm);
  });

  it('should handle REQUEST_TOKEN', () => {
    const action = { type: REQUEST_TOKEN };

    const nextState = reducer(initialState, action);

    expect(nextState.isAuthenticating).toBe(true);
  });

  it('should handle CHECK_FOR_TOKEN', () => {
    const action = {
      type: CHECK_FOR_TOKEN,
      authenticated: true,
      token: 'test-token'
    };

    const nextState = reducer(initialState, action);

    expect(nextState.isAuthenticating).toBe(false);
    expect(nextState.authenticated).toBe(action.authenticated);
    expect(nextState.token).toBe(action.token);
  });

  it('should handle REQUEST_REGISTER', () => {
    const action = { type: REQUEST_REGISTER };

    const nextState = reducer(initialState, action);

    expect(nextState.isRegistering).toBe(true);
  });

  it('should handle REGISTER_SUCCESS', () => {
    const action = { type: REGISTER_SUCCESS };

    const nextState = reducer(initialState, action);

    expect(nextState.isRegistering).toBe(false);
    expect(nextState.email).toEqual('')
    expect(nextState.password).toEqual('')
    expect(nextState.passwordConfirm).toEqual('')
  });

});
