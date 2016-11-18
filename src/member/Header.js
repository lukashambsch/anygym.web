import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <div>Member Section</div>
        {this.props.children}
      </div>
    )
  }
}

export default Header
