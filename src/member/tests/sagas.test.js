import { takeLatest } from 'redux-saga/effects';

import { REQUEST_MEMBERS } from '../actions';
import { getMembers, getMembersSaga } from '../sagas';

describe('member sagas', () => {

  it('getMembersSaga', () => {
    const gen = getMembersSaga();

    expect(gen.next().value).toEqual(takeLatest(REQUEST_MEMBERS, getMembers));
    expect(gen.next().done).toBe(true);
  });

});
