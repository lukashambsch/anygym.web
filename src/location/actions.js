// @flow
import type { GymLocation, BusinessHour } from './types';

export const REQUEST_LOCATIONS = 'REQUEST_LOCATIONS';
export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';
export const FAIL_LOCATION_REQUEST = 'FAIL_LOCATION_REQUEST';

export function requestLocations() {
  return {
    type: REQUEST_LOCATIONS
  };
}

export function receiveLocations(json: Array<GymLocation>) {
  let items = {};
  json.forEach((location) => {
    let businessHours: Object = {};

    for (let i: number = 0; i < location.business_hours.length; i++) {
      let businessHour: BusinessHour = location.business_hours[i];
      businessHours[businessHour.day_id] = businessHour;
    }

    location.business_hours = businessHours;
    items[location.gym_location_id] = location;
  });

  return {
    type: RECEIVE_LOCATIONS,
    locations: items,
    receivedAt: Date.now()
  };
}

export function failLocationRequest(err: Error) {
  console.log(err);

  return {
    type: FAIL_LOCATION_REQUEST,
    error: err
  };
}

export function fetchLocations() {
  return requestLocations();
}
