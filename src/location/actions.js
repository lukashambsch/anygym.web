export const REQUEST_LOCATIONS = 'REQUEST_LOCATIONS'
export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS'
export const FAIL_LOCATION_REQUEST = 'FAIL_LOCATION_REQUEST'

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

export const failLocationRequest = (err) => {
  console.log(err)

  return {
    type: FAIL_LOCATION_REQUEST,
    error: err
  }
}

export function fetchLocations() {
  return requestLocations()
}
