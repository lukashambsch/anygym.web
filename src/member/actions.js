import axios from 'axios'

export const REQUEST_MEMBERS = 'REQUEST_MEMBERS'
export const RECEIVE_MEMBERS = 'RECEIVE_MEMBERS'

export const requestMembers = () => {
  return {
    type: REQUEST_MEMBERS
  }
}

export const receiveMembers = (json) => {
  return {
    type: RECEIVE_MEMBERS,
    members: json,
    receivedAt: Date.now()
  }
}

export function fetchMembers() {
  return function(dispatch) {
    dispatch(requestMembers())

    return axios.get('http://localhost:8080/api/v1/members')
    .then(response =>
      dispatch(receiveMembers(response.data))
    )
    .catch(err =>
      console.log(err)
    )
  }
}
