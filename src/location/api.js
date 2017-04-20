import axios from 'axios'

const root = '/gym_locations'

const locationApi = {
  getLocations: function() {
    return axios.get(root)
      .then(response => response.data)
  }
}

export default locationApi
