import React from 'react';
import { shallow } from 'enzyme';

import Button from '../Button';

function setup() {
  const props = {
    clickHandler: jest.fn()
  };

  const button = shallow(<Button {...props}>Submit</Button>);

  return {
    props,
    button
  };
}

describe('<Button />', () => {

  it('Button renders self & subcomponents', () => {
    const { props, button } = setup();

    expect(button.find('.button').length).toEqual(1);
    expect(button.find('.button').text()).toEqual('Submit');
  });

  it('Button click calls clickHandler', () => {
    const { props, button } = setup();

    button.find('.button').simulate('click');
    expect(props.clickHandler.mock.calls.length).toEqual(1);
  });

  it('Button renders w/ nested component', () => {
    const props = {
      color: 'white',
      clickHandler: jest.fn()
    };
    const button = shallow(
      <Button {...props}>
        <span className="test"></span>
      </Button>
    );

    expect(button.find('.btn-white').length).toEqual(1);
    expect(button.find('.button > span.test').length).toEqual(1);
  });

});
