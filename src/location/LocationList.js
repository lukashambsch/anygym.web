// @flow
import React, { Component } from 'react';

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
      <div>
        <table>
          <thead>
            <tr>
              <th>Location Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.locations.map(location =>
              <LocationRow
                key={location.gym_location_id}
                checkIn={this.props.checkIn}
                member={this.props.member}
                location={location} />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default LocationList;
