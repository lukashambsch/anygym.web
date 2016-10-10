import React, { Component } from 'react'

class LoginForm extends Component {
  render() {
    return (
      <div>
        <input type="text"
          placeholder="username"
          value={this.props.username}
          onChange={this.props.onUsernameChange}
        />
        <input type="password"
          placeholder="password"
          value={this.props.password}
          onChange={this.props.onPasswordChange}
        />
        <button onClick={() => this.props.login(this.props.username, this.props.password)}>Login</button>
      </div>
    )
  }
}

export default LoginForm
