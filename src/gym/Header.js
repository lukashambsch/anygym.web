import React, { Component } from 'react'

class Header extends Component {
  componentWillMount() {
    this.props.checkForToken();
  }

  render() {
    return (
      <div>
        <div>Gym Section</div>
        {this.props.children}
      </div>
    )
  }
}

export default Header
