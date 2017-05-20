// @flow
import React, { Component } from 'react';

class LocationRow extends Component {
  props: {
    location: Object,
    checkIn: Function,
    member: Object
  };

  render() {
    return (
      <tr>
        <td>{this.props.location.location_name}</td>
        <td>
          <button onClick={() =>
            this.props.checkIn({member_id: this.props.member.member_id, gym_location_id: this.props.location.gym_location_id})
          }>Check In</button>
        </td>
      </tr>
    );
  }
}

export default LocationRow;
