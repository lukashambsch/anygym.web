import { connect } from 'react-redux'

import { fetchLocations } from './actions'
import { createVisit } from '../visit/actions'
import LocationList from './LocationList'

const mapStateToProps = (state) => {
  let locations = Object.keys(state.locations.items).map((key) => state.locations.items[key])
  return {
    member: { user_id: state.auth.userId },
    locations: locations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkIn: (visit) => {
      dispatch(createVisit(visit))
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
