import axios from 'axios';
import Cookies from 'js-cookie';

import * as actions from '../actions';
import config from '../../config';

describe('auth actions', () => {

  beforeEach(() => {
    Cookies.set(config.tokenKey, '');
  });

  it('authenticateSuccess should create an action to set the token', () => {
    const token = 'mock-token';
    const expectedAction = {
      type: actions.SET_AUTH_SUCCESS,
      token: token
    };

    expect(actions.authenticateSuccess(token)).toEqual(expectedAction);
    expect(axios.defaults.headers.common['Authorization']).toEqual(`Bearer ${token}`);
    expect(Cookies.get(config.tokenKey)).toEqual(token);
  });

  it('checkForToken should create an action to verify the token and set the auth header', () => {
    const token = 'new-mock-token';
    const expectedAction = {
      type: actions.CHECK_FOR_TOKEN,
      token: token,
      authenticated: true
    };

    Cookies.set(config.tokenKey, token);

    expect(actions.checkForToken()).toEqual(expectedAction);
    expect(axios.defaults.headers.common['Authorization']).toEqual(`Bearer ${token}`);
  });

  it('checkForToken should create an action to verify the token and delete the auth header', () => {
    const token = 'new-mock-token';
    const expectedAction = {
      type: actions.CHECK_FOR_TOKEN,
      token: '',
      authenticated: false
    };

    expect(actions.checkForToken()).toEqual(expectedAction);
    expect(axios.defaults.headers.common['Authorization']).toBe(undefined);
  });

});
