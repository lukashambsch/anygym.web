import axios from 'axios'

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
  return function(dispatch) {
    dispatch(requestLocations())

    return axios.get('/gym_locations')
      .then(response =>
        dispatch(receiveLocations(response.data))
      )
      .catch(err =>
        console.log(err)
      )
  }
}
