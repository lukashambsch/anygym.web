import axios from 'axios'

const authApi = {
  getToken: function(user) {
    return axios.post('/authenticate', user)
      .then(response => response.data)
  },
  register: function(user) {
    return axios.post('/users', user)
      .then(response => response.data)
  }
}

export default authApi
