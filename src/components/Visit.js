import React, { Component } from 'react'

class Visit extends Component {
  render() {
    return (
      <li>{this.props.visit.visit_id}</li>
    )
  }
}

export default Visit
