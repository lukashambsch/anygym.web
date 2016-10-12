import React, { Component } from 'react'

class RegisterForm extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password"/>
        <input type="password" placeholder="confirm password"/>
        <select name="role">
          {this.props.roles.map(role =>
            <option value={role.role_id}>{role.role_name}</option>
          )}
        </select>
        <button>Register</button>
      </div>
    )
  }
}

export default RegisterForm
