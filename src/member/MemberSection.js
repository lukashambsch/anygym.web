// @flow
import React, { Component } from 'react';
import { Route } from 'react-router';

import Nav from '../nav/Nav';
import LocationListContainer from '../location/LocationListContainer';

export type MemberSectionStateProps = {
};

export type MemberSectionDispatchProps = {
};

class MemberSection extends Component {
  props: MemberSectionStateProps & MemberSectionDispatchProps;

  render(match: any) {
    console.log(match);
    return (
      <div>
        <Nav />
        <div>Member Section</div>
        <Route path="/member/locations" component={LocationListContainer} />
      </div>
    );
  }
}

export default MemberSection;
