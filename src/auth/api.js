// @flow
import axios from 'axios';

import type { User } from './types';

const authApi: Object = {
  getUser: function(email: string) {
    return axios.get(`/users?email=${email}`)
      .then(response => {
        if (response.data.length) {
          return response.data[0];
        } else {
          return null;
        }
      });
  },
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
