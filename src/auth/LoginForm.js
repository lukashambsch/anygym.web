import React, { Component } from 'react';

class LoginForm extends Component {
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
        <button onClick={() => this.props.login(this.props.email, this.props.password)}>Login</button>
      </div>
    );
  }
}

export default LoginForm;
