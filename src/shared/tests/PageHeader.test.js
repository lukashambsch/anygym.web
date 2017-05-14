import React from 'react';
import { shallow } from 'enzyme';

import PageHeader from '../PageHeader';

function setup() {
  const props = {
    title: 'Test Title'
  };

  const pageHeader = shallow(<PageHeader {...props} />);

  return {
    props,
    pageHeader
  };
}

describe('<PageHeader />', () => {

  it('PageHeader renders self and subcomponents successfully', () => {
    const { props, pageHeader } = setup();

    expect(pageHeader.find('header').length).toEqual(1);
    expect(pageHeader.find('h1').length).toEqual(1);
    expect(pageHeader.find('h1').text()).toEqual(props.title);
  });

});

