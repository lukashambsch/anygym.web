import React from 'react';
import { shallow } from 'enzyme';

import Nav from '../Nav';

function setup() {
  const props = { };

  const nav = shallow(<Nav {...props} />);

  return {
    props,
    nav
  };
}

describe('<Nav />', () => {

  it('Nav renders self and subcomponents', () => {
    const { nav, props } = setup();

    expect(nav.find('nav').length).toEqual(1);
  });

});
