// @flow
import { connect } from 'react-redux';

import { fetchLocations } from './actions';
import { createVisit } from '../visit/actions';
import LocationList from './LocationList';
import type { Visit } from '../visit/types';
import type { LocationListStateProps, LocationListDispatchProps } from '../member/types';

function mapStateToProps(state: Object): LocationListStateProps {
  let locations = Object.keys(state.locations.items).map((key) => state.locations.items[key]);

  return {
    member: { user_id: state.auth.userId },
    locations: locations
  };
}

function mapDispatchToProps(dispatch: Function): LocationListDispatchProps {
  return {
    checkIn: (visit: Visit) => {
      dispatch(createVisit(visit))
    },
    loadData: () => {
      dispatch(fetchLocations())
    }
  };
}

const LocationListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationList);

export default LocationListContainer;
