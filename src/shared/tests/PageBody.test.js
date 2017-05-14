import React from 'react';
import { shallow } from 'enzyme';

import PageBody from '../PageBody';

function setup() {
  const props = { };

  const pageBody = shallow(<PageBody {...props} />);

  return {
    props,
    pageBody
  };
}

describe('<PageBody />', () => {

  it('PageBody renders self and subcomponents successfully', () => {
    const { props, pageBody } = setup();

    expect(pageBody.find('section').length).toEqual(1);
  });

});
