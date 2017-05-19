// @flow
import React, { Component } from 'react';
import { Route } from 'react-router';

import PageHeader from '../shared/PageHeader';
import PageBody from '../shared/PageBody';
import VisitListContainer from '../visit/VisitListContainer';
import VisitDetailContainer from '../visit/VisitDetailContainer';

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
          <Route exact path="/gym/visits" component={VisitListContainer} />
          <Route exact path="/gym/visits/:visit_id" component={VisitDetailContainer} />
        </PageBody>
      </div>
    );
  }
}

export default GymScreen;
