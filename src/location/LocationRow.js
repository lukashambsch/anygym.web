import React, { Component } from 'react'

class LocationRow extends Component {
  render() {
    let location = this.props.location

    return (
      <tr>
        <td>{location.location_name}</td>
        <td>
          <button onClick={() => this.props.checkIn(location)}>Check In</button>
        </td>
      </tr>
    )
  }
}

export default LocationRow
