import React, { Component } from 'react';
import { Route } from 'react-router';

import VisibleVisitList from '../visit/VisibleVisitList';

export type GymSectionStateProps = {

};

export type GymSectionDispatchProps = {

};

class GymSection extends Component {
  props: GymSectionStateProps & GymSectionDispatchProps;

  render() {
    return (
      <div>
        <div>Gym Section</div>
        <Route path="/gym/visits" component={VisibleVisitList} />
      </div>
    );
  }
}

export default GymSection;
