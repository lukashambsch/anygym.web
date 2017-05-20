import React from 'react';
import { shallow } from 'enzyme';

import VisitDetail from '../VisitDetail';

function setup() {
  const props = {
    visit: {
      visit_id: 1,
      member_id: 1,
      gym_location_id: 1,
      status_id: 1,
      created_on: '',
      modified_on: ''
    },
    member: {
      member_id: 1,
      user: {
        user_id: 0,
        email: '',
        password: ''
      }
    },
    status: {
      status_id: 1,
      status_name: 'Pending'
    },
    approveClickHandler: jest.fn(),
    denyClickHandler: jest.fn(),
    goToVisitList: jest.fn(),
    requestVisit: jest.fn()
  };

  const visitDetail = shallow(<VisitDetail {...props} />);

  return {
    props,
    visitDetail
  };
}

describe('<VisitDetail />', () => {

  it('VisitDetail renders self and subcomponents', () => {
    const { props, visitDetail } = setup();

    expect(visitDetail.find('.visit-detail').length).toEqual(1);
    expect(visitDetail.find('Button').length).toEqual(3);
    expect(visitDetail.find('img.profile-photo').length).toEqual(1);
  });

  it('VisitDetail back click goes to visit list', () => {
    const { props, visitDetail } = setup();

    expect(visitDetail.find('Button').at(0).props().clickHandler).toEqual(props.goToVisitList);
  });

});
