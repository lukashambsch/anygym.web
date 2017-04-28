import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import VisitList from '../../src/visit/VisitList';
import { visits, statuses, members } from '../mock-data';


describe('VisitList', () => {
  let props;

  beforeEach(() => {
    props = {
      loadData: () => {},
      members: members,
      statuses: statuses,
      onApproveClick: () => {},
      onDenyClick: () => {},
      visits: visits
    };

  });

  it('should have 3 VisitRow components', () => {
    const wrapper = shallow(<VisitList {...props} />);
    const rows = wrapper.find('VisitRow');
    expect(rows).to.have.length(3);
  });

});
