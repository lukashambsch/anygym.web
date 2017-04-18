import React, { Component } from 'react'
import { Route } from 'react-router'

import LocationListContainer from '../location/LocationListContainer'

class Header extends Component {
  render() {
    return (
      <div>
        <div>Member Section</div>
        <Route path="/member/locations" component={LocationListContainer} />
      </div>
    )
  }
}

export default Header
