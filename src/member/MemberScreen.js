// @flow
import React, { Component } from 'react';
import { Route } from 'react-router';

import Nav from '../nav/Nav';
import LocationListContainer from '../location/LocationListContainer';

export type MemberScreenStateProps = {
};

export type MemberScreenDispatchProps = {
};

class MemberScreen extends Component {
  props: MemberScreenStateProps & MemberScreenDispatchProps;

  render() {
    return (
      <div>
        <Nav />
        <div>Member Screen</div>
        <Route path="/member/locations" component={LocationListContainer} />
      </div>
    );
  }
}

export default MemberScreen;
