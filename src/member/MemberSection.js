// @flow
import React, { Component } from 'react';
import { Route } from 'react-router';

import LocationListContainer from '../location/LocationListContainer';

export type MemberSectionStateProps = {
};

export type MemberSectionDispatchProps = {
};

class MemberSection extends Component {
  props: MemberSectionStateProps & MemberSectionDispatchProps;

  render() {
    return (
      <div>
        <div>Member Section</div>
        <Route path="/member/locations" component={LocationListContainer} />
      </div>
    );
  }
}

export default MemberSection;
