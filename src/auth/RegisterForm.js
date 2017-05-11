// @flow
import React, { Component } from 'react';

import type { User, Role } from './types';

export type RegistrationStateProps = {
  email: string;
  password: string;
  passwordConfirm: string;
  roles: Array<Role>;
};

export type RegistrationDispatchProps = {
  onEmailChange: Function;
  onPasswordChange: Function;
  onPasswordConfirmChange: Function;
  register: Function;
};

class RegisterForm extends Component {
  props: RegistrationStateProps & RegistrationDispatchProps;

  getUser(): User {
    let user: User = {
      email: this.props.email,
      password: this.props.password
    };
    return user;
  }

  render() {
    return (
      <div>
        <input type="text"
          placeholder="email"
          value={this.props.email}
          onChange={this.props.onEmailChange}
        />
        <input type="password"
          placeholder="password"
          value={this.props.password}
          onChange={this.props.onPasswordChange}
        />
        <input type="password"
          placeholder="confirm password"
          value={this.props.passwordConfirm}
          onChange={this.props.onPasswordConfirmChange}
        />
        <select name="role">
          {this.props.roles.map(role =>
            <option key={role.role_id} value={role.role_id}>{role.role_name}</option>
          )}
        </select>
        <button onClick={() => this.props.register(this.getUser())}>Register</button>
      </div>
    );
  }
}

export default RegisterForm;
