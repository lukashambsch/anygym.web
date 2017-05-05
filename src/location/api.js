// @flow
import axios from 'axios';

const root = '/gym_locations';

let locationApi = {
  getLocations: function() {
    return axios.get(root)
      .then(response => response.data);
  }
};

export default locationApi;
