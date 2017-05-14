// @flow
import React, { Component } from 'react';
import { Route } from 'react-router';

import PageHeader from '../shared/PageHeader';
import PageBody from '../shared/PageBody';
import VisibleVisitList from '../visit/VisibleVisitList';

export type GymScreenStateProps = {

};

export type GymScreenDispatchProps = {

};

class GymScreen extends Component {
  props: GymScreenStateProps & GymScreenDispatchProps;

  render() {
    return (
      <div>
        <PageHeader title={'Gym Screen'} />
        <PageBody>
          <Route path="/gym/visits" component={VisibleVisitList} />
        </PageBody>
      </div>
    );
  }
}

export default GymScreen;
