// @flow
import React, { Component } from 'react';

import Button from '../shared/Button';
import type { Visit } from '../visit/types';
import { statusEnum } from '../status/enums';

class LocationRow extends Component {
  props: {
    location: Object,
    checkIn: Function,
    member: Object
  };

  getVisit(): Visit {
    return {
      visit_id: 0,
      member_id: this.props.member.member_id,
      gym_location_id: this.props.location.location_id,
      status_id: statusEnum.Pending
    };
  }

  render() {
    return (
      <div className="columns location-row">
        <span>{this.props.location.location_name}</span>
        <span>
        <Button
          color="blue"
          clickHandler={() => this.props.checkIn(this.getVisit())}>
          Check In
        </Button>
        </span>
      </div>
    );
  }
}

export default LocationRow;
