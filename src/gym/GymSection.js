// @flow
import React, { Component } from 'react';
import { Route } from 'react-router';

import Nav from '../nav/Nav';
import VisibleVisitList from '../visit/VisibleVisitList';

export type GymSectionStateProps = {

};

export type GymSectionDispatchProps = {

};

class GymSection extends Component {
  props: GymSectionStateProps & GymSectionDispatchProps;

  render(match: any) {
    return (
      <div>
        <Nav />
        <div>Gym Section</div>
        <Route path="/gym/visits" component={VisibleVisitList} />
      </div>
    );
  }
}

export default GymSection;
