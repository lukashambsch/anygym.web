// @flow
import React, { Component } from 'react';
import { Route } from 'react-router';

import Nav from '../nav/Nav';
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
        <Nav />
        <div>Gym Screen</div>
        <Route path="/gym/visits" component={VisibleVisitList} />
      </div>
    );
  }
}

export default GymScreen;
