import React, { Component } from 'react'

import LocationRow from './LocationRow'

class LocationList extends Component {
  componentWillMount() {
    console.log(this.props)
    this.props.loadData()
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
                location={location} />
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default LocationList