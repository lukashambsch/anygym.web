import { takeLatest } from 'redux-saga/effects';

import { REQUEST_LOCATIONS } from '../actions';
import { getLocations, getLocationsSaga } from '../sagas';

describe('location sagas', () => {

  it('getLocationsSaga', () => {
    const gen = getLocationsSaga();

    expect(gen.next().value).toEqual(takeLatest(REQUEST_LOCATIONS, getLocations));
    expect(gen.next().done).toBe(true);
  });

});
