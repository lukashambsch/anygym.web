import axios from 'axios';

const root = '/statuses';

const statusApi = {
  getStatuses: function() {
    return axios.get(root)
      .then(response => response.data);
  }
};

export default statusApi;
