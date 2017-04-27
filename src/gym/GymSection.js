import React, { Component } from 'react';
import { Route } from 'react-router';

import VisibleVisitList from '../visit/VisibleVisitList';

class GymSection extends Component {
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
