import React from 'react';
import { shallow } from 'enzyme';

import VisitList from '../VisitList';
import { visits, statuses, members } from '../../mocks';

function setup() {
  const props = {
    visits: visits,
    members: members,
    statuses: statuses,
    loadData: jest.fn(),
    onApproveClick: jest.fn(),
    onDenyClick: jest.fn(),
  };

  const visitList = shallow(<VisitList {...props} />);

  return {
    props,
    visitList
  };
}


describe('VisitList', () => {

  it('should have 3 VisitRow components', () => {
    const { visitList, props } = setup();

    expect(visitList.find('VisitRow').length).toEqual(3);
  });

});
