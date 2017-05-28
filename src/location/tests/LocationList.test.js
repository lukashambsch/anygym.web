import React from 'react';
import { shallow } from 'enzyme';

import LocationList from '../LocationList';
import { gymLocations, members } from '../../mocks';

function setup() {
  const props = {
    locations: Object.values(gymLocations),
    member: members[1],
    loadData: jest.fn()
  };

  const locationList = shallow(<LocationList {...props} />);

  return {
    props,
    locationList
  };
}

describe('<LocationList />', () => {

  it('LocationList renders self & subcomponents correctly', () => {
    const { props, locationList } = setup();

    expect(locationList.find('PageBody').length).toEqual(1);
    expect(locationList.find('h3').length).toEqual(1);
    expect(locationList.find('LocationRow').length).toEqual(props.locations.length);
  });

  it('LocationList calls loadData on componentWillMount', () => {
    const { props, locationList } = setup();

    expect(props.loadData.mock.calls.length).toEqual(1);
  });

});
