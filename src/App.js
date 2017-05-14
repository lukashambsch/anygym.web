// @flow
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';

import { requireAuth } from './router';
import GymScreenContainer from './gym/GymScreenContainer';
import LoginScreenContainer from './auth/LoginScreenContainer';
import MemberScreenContainer from './member/MemberScreenContainer';
import RegisterScreenContainer from './auth/RegisterScreenContainer';

import './App.css';

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
        <Route path="/login" component={LoginScreenContainer} />
        <Route path="/register" component={RegisterScreenContainer} />
        <Route path="/gym" component={GymScreenContainer} onEnter={requireAuth} />
        <Route path="/member" component={MemberScreenContainer} onEnter={requireAuth} />
      </div>
    );
  }
}

export default App;
