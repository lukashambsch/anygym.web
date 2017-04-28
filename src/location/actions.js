export const REQUEST_LOCATIONS = 'REQUEST_LOCATIONS'
export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS'
export const FAIL_LOCATION_REQUEST = 'FAIL_LOCATION_REQUEST'

export function requestLocations() {
  return {
    type: REQUEST_LOCATIONS
  }
}

export function receiveLocations(json) {
  let items = {}
  json.forEach((location) => {
    items[location.gym_location_id] = location
  })

  return {
    type: RECEIVE_LOCATIONS,
    locations: items,
    receivedAt: Date.now()
  }
}

export function failLocationRequest(err) {
  console.log(err)

  return {
    type: FAIL_LOCATION_REQUEST,
    error: err
  }
}

export function fetchLocations() {
  return requestLocations()
}
