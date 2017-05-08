import React from 'react';
import { shallow } from 'enzyme';

import VisitRow from '../VisitRow';
import { visits, statuses, members } from '../../mocks';

function setup() {
  const props = {
    visit: visits[0],
    members: members,
    statuses: statuses,
    approve: jest.fn(),
    deny: jest.fn()
  };

  const visitRow = shallow(<VisitRow {...props} />);

  return {
    props,
    visitRow
  };
}

describe('VisitRow', () => {
  it('should be 1 row', () => {
    const { visitRow, props } = setup();

    expect(visitRow.find('tr').length).toEqual(1);
  });

  it('should display 5 cells', () => {
    const { visitRow, props } = setup();

    expect(visitRow.find('tr td').length).toEqual(5);
  });

  it('should display 2 buttons', () => {
    const { visitRow, props } = setup();

    expect(visitRow.find('button').length).toEqual(2);
  });

});
