// @flow
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';

import NavContainer from './nav/NavContainer';
import GymScreenContainer from './gym/GymScreenContainer';
import LoginScreenContainer from './auth/LoginScreenContainer';
import MemberScreenContainer from './member/MemberScreenContainer';
import RegisterScreenContainer from './auth/RegisterScreenContainer';

import './App.css';

export type AppStateProps = { };

export type AppDispatchProps = {
  checkForToken: Function;
};

class App extends Component {
  props: AppStateProps & AppDispatchProps;

  componentWillMount() {
    this.props.checkForToken();
  }

  render() {
    return (
      <div>
        <NavContainer />
        <Route exact path="/" render={() => (
          <Redirect to="/login" />
        )} />
        <Route path="/login" component={LoginScreenContainer} />
        <Route path="/register" component={RegisterScreenContainer} />
        <Route path="/gym" component={GymScreenContainer} />
        <Route path="/member" component={MemberScreenContainer} />
      </div>
    );
  }
}

export default App;
