// @flow
import React, { Component } from 'react';

import Button from '../shared/Button';
import { formatAddress, formatTime } from '../shared/utils';
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
      gym_location_id: this.props.location.gym_location_id,
      status_id: statusEnum.Pending
    };
  }

  getOpenTime(): string {
    let today: number = new Date().getDay() + 1;
    let openTime: string = this.props.location.business_hours[today].open_time;

    return formatTime(openTime, false);
  }

  getCloseTime(): string {
    let today: number = new Date().getDay() + 1;
    let closeTime: string = this.props.location.business_hours[today].close_time;

    return formatTime(closeTime, false);
  }

  render() {
    return (
      <div className="columns location-row">
        <div className="row">
          <span>{this.props.location.location_name}</span>
        </div>
        <div className="row">
          <span className="columns six">
            {formatAddress(this.props.location.address)}
          </span>
          <span className="columns six">
            {`${this.getOpenTime()} - ${this.getCloseTime()}`}
          </span>
        </div>
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
