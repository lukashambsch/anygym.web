// @flow
import React, { Component } from 'react';
import { Route } from 'react-router';

import PageHeader from '../shared/PageHeader';
import PageBody from '../shared/PageBody';
import LocationListContainer from '../location/LocationListContainer';

export type MemberScreenStateProps = { };

export type MemberScreenDispatchProps = { };

class MemberScreen extends Component {
  props: MemberScreenStateProps & MemberScreenDispatchProps;

  render() {
    return (
      <div className="container">
        <PageHeader title={'Member Screen'} />
        <PageBody>
          <Route path="/member/locations" component={LocationListContainer} />
        </PageBody>
      </div>
    );
  }
}

export default MemberScreen;
