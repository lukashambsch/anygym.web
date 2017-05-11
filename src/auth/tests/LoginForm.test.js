import React from 'react';
import { shallow } from 'enzyme';

import LoginForm from '../LoginForm';

function setup() {
  const props = {
    email: 'test@gmail.com',
    password: 'testpass',
    onEmailChange: jest.fn(),
    onPasswordChange: jest.fn(),
    login: jest.fn()
  };

  const loginForm = shallow(<LoginForm {...props} />);

  return {
    props,
    loginForm
  };
}

describe('<LoginForm />', () => {

  it('LoginForm successfully renders self and subcomponents', () => {
    const { props, loginForm } = setup();

    expect(loginForm.find('input[type="text"]').length).toEqual(1);
    expect(loginForm.find('input[type="password"]').length).toEqual(1);
    expect(loginForm.find('button'));
  });

  it('LoginForm button click logs in user', () => {
    const { props, loginForm } = setup();

    loginForm.find('button').simulate('click');
    expect(props.login.mock.calls.length).toEqual(1);
  });

  it('LoginForm email text box updates email', () => {
    const { props, loginForm } = setup();

    loginForm.find('input[type="text"]').simulate('change', {target: {value: 'new@gmail.com'}});
    expect(props.onEmailChange.mock.calls.length).toEqual(1);
  });

  it('LoginForm password text box updates password', () => {
    const { props, loginForm } = setup();

    loginForm.find('input[type="password"]').simulate('change', {target: {value: 'newpass'}});
    expect(props.onPasswordChange.mock.calls.length).toEqual(1);
  });

});
