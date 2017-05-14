// @flow
import React, { Component } from 'react';

import LoginForm from './LoginForm';

export type LoginScreenStateProps = {
  email: string;
  password: string;
};

export type LoginScreenDispatchProps = {
  onEmailChange: Function;
  onPasswordChange: Function;
  login: Function;
};

class LoginScreen extends Component {
  props: LoginScreenStateProps & LoginScreenDispatchProps;

  render() {
    return (
      <div>
        <LoginForm
          email={this.props.email}
          password={this.props.password}
          onEmailChange={this.props.onEmailChange}
          onPasswordChange={this.props.onPasswordChange}
          login={this.props.login} />
      </div>
    );
  }
}

export default LoginScreen;
