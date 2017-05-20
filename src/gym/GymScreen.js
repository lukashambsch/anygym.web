// @flow
import React, { Component } from 'react';
import { Route } from 'react-router';

import VisitListContainer from '../visit/VisitListContainer';
import VisitDetailContainer from '../visit/VisitDetailContainer';

export type GymScreenStateProps = {

};

export type GymScreenDispatchProps = {
  getVisits: Function;
  getMembers: Function;
  getStatuses: Function;
};

class GymScreen extends Component {
  props: GymScreenStateProps & GymScreenDispatchProps;

  componentWillMount() {
    this.props.getVisits();
    this.props.getMembers();
    this.props.getStatuses();
  }

  render() {
    return (
      <div className="container">
        <Route exact path="/gym/visits" component={VisitListContainer} />
        <Route exact path="/gym/visits/:visit_id" component={VisitDetailContainer} />
      </div>
    );
  }
}

export default GymScreen;
