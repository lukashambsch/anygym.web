// @flow
import axios from 'axios';

import type { User } from './types';

const authApi: Object = {
  getToken: function(user: User) {
    return axios.post('/authenticate', user)
      .then(response => response.data);
  },
  register: function(user: User) {
    return axios.post('/users', user)
      .then(response => response.data);
  }
};

export default authApi;
