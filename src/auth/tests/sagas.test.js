import { takeLatest } from 'redux-saga/effects';

import { REQUEST_TOKEN, REQUEST_REGISTER } from '../actions';
import { getTokenSaga, registerUserSaga, getToken, registerUser } from '../sagas';

describe('auth sagas', () => {

  it('getTokenSaga', () => {
    const gen = getTokenSaga();

    expect(gen.next().value).toEqual(takeLatest(REQUEST_TOKEN, getToken));
    expect(gen.next().done).toBe(true);
  });

  it('registerUserSaga', () => {
    const gen = registerUserSaga();

    expect(gen.next().value).toEqual(takeLatest(REQUEST_REGISTER, registerUser));
    expect(gen.next().done).toBe(true);
  });

});
