import React from 'react';
import { shallow } from 'enzyme';

import VisitList from '../VisitList';
import { visits, statuses, members } from '../../mocks';

function setup() {
  const props = {
    visits: visits,
    members: members,
    statuses: statuses,
    requestVisits: jest.fn(),
    requestMembers: jest.fn(),
    goToDetail: jest.fn(),
  };

  const visitList = shallow(<VisitList {...props} />);

  return {
    props,
    visitList
  };
}


describe('VisitList', () => {

  it('VisitList should have 3 VisitRow components', () => {
    const { visitList, props } = setup();

    expect(visitList.find('VisitRow').length).toEqual(3);
  });

  it('VisitList should update data on Update click', () => {
    const { visitList, props } = setup();

    expect(visitList.find('Button').props().clickHandler).toEqual(visitList.loadData);
  });

});
