import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'

import { requireAuth } from './router'
import GymHeaderContainer from './gym/HeaderContainer'
import LoginContainer from './auth/LoginContainer'
import MemberHeaderContainer from './member/HeaderContainer'
import RegisterContainer from './auth/RegisterContainer'

class App extends Component {
  componentWillMount() {
    this.props.checkForToken();
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <Redirect to="/login" />
        )}/>
        <Route path="/login" component={LoginContainer} />
        <Route path="/register" component={RegisterContainer} />
        <Route path="/gym" component={GymHeaderContainer} onEnter={requireAuth} />
        <Route path="/member" component={MemberHeaderContainer} onEnter={requireAuth} />
      </div>
    )
  }
}

export default App
