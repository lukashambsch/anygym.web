import React from 'react';
import { shallow } from 'enzyme';

import VisitRow from '../VisitRow';
import { visits, members } from '../../mocks';

function setup() {
  const props = {
    visit: visits[0],
    member: members[visits[0].member_id],
    clickHandler: jest.fn()
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

    expect(visitRow.find('.visit-row').length).toEqual(1);
  });

  it('should display name and time', () => {
    const { visitRow, props } = setup();

    expect(visitRow.find('span').length).toEqual(2);
  });

  it('should fire click handler on click', () => {
    const { visitRow, props } = setup();

    visitRow.find('.visit-row').simulate('click');
    expect(props.clickHandler.mock.calls.length).toEqual(1);
  });

});
