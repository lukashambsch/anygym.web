// @flow
import React, { Component } from 'react';

import PageBody from '../shared/PageBody';
import LocationRow from './LocationRow';
import type { GymLocation } from './types';
import type { Member } from '../member/types';

export type LocationListStateProps = {
  location: Array<GymLocation>;
  member: Member;
};

export type LocationListDispatchProps = {
  checkIn: Function;
  loadData: Function;
};

class LocationList extends Component {
  props: LocationListStateProps & LocationListDispatchProps;

  componentWillMount() {
    this.props.loadData();
  }

  render() {
    return (
      <div className="location-list">
        <PageBody>
          <h3>Find a Gym</h3>
          {this.props.locations.map(location =>
            <LocationRow
              key={location.gym_location_id}
              checkIn={this.props.checkIn}
              member={this.props.member}
              location={location} />
          )}
        </PageBody>
      </div>
    );
  }
}

export default LocationList;
