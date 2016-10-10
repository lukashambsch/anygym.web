import React, { Component } from 'react'

class LoginForm extends Component {
  render() {
    return (
      <div>
        <form action="">
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
        </form>
      </div>
    )
  }
}

export default LoginForm
