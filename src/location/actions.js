import locationApi from './api'

export const REQUEST_LOCATIONS = 'REQUEST_LOCATIONS'
export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS'

export const requestLocations = () => {
  return {
    type: REQUEST_LOCATIONS
  }
}

export const receiveLocations = (json) => {
  return {
    type: RECEIVE_LOCATIONS,
    locations: json,
    receivedAt: Date.now()
  }
}

export function fetchLocations() {
  return requestLocations()
}
