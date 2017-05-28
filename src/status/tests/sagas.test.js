import { takeLatest } from 'redux-saga/effects';

import { REQUEST_STATUSES } from '../actions';
import { getStatuses, getStatusesSaga } from '../sagas';

describe('getStatuses', () => {

  it('getStatuses', () => {
    const gen = getStatusesSaga();

    expect(gen.next().value).toEqual(takeLatest(REQUEST_STATUSES, getStatuses));
    expect(gen.next().done).toBe(true);
  });

});
