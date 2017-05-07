// @flow
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';

import { requireAuth } from './router';
import GymSectionContainer from './gym/GymSectionContainer';
import LoginContainer from './auth/LoginContainer';
import MemberSectionContainer from './member/MemberSectionContainer';
import RegisterContainer from './auth/RegisterContainer';

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
        <Route path="/login" component={LoginContainer} />
        <Route path="/register" component={RegisterContainer} />
        <Route path="/gym" component={GymSectionContainer} onEnter={requireAuth} />
        <Route path="/member" component={MemberSectionContainer} onEnter={requireAuth} />
      </div>
    );
  }
}

export default App;
