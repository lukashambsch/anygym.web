// @flow
import { connect } from 'react-redux';

import { fetchLocations } from './actions';
import LocationList from './LocationList';
import type { LocationListStateProps, LocationListDispatchProps } from '../member/types';

function mapStateToProps(state: Object): LocationListStateProps {
  // TODO: Change to use Object.values when flowtype support improves. https://github.com/facebook/flow/issues/2221
  let locations = Object.keys(state.locations.items).map((key) => state.locations.items[key]);

  return {
    member: state.auth.user.member,
    locations: locations
  };
}

function mapDispatchToProps(dispatch: Function): LocationListDispatchProps {
  return {
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
