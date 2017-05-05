// @flow
import axios from 'axios';

const root = '/members';

const memberApi = {
  getMembers: function() {
    return axios.get(root)
      .then(response => response.data);
  }
};

export default memberApi;
