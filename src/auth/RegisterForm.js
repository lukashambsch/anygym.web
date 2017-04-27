import React, { Component } from 'react';

class RegisterForm extends Component {
  getUser() {
    let user = {
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
            <option value={role.role_id}>{role.role_name}</option>
          )}
        </select>
        <button onClick={() => this.props.register(this.getUser())}>Register</button>
      </div>
    );
  }
}

export default RegisterForm;
