import { connect } from 'react-redux'

import { fetchLocations } from './actions'
import LocationList from './LocationList'

const mapStateToProps = (state) => {
  let locations = Object.keys(state.locations.items).map((key) => state.locations.items[key])
  return {
    locations: locations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkIn: (location) => {
      console.log('checking in')
    },
    loadData: () => {
      dispatch(fetchLocations())
    }
  }
}

const LocationListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationList)

export default LocationListContainer
