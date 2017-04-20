import axios from 'axios'

const root = '/visits'

const visitApi = {
  getVisits: function () {
    return axios.get(root)
      .then(response => response.data)
  },
  createVisit: function(visit) {
    return axios.post(root, visit)
      .then(response => response.data)
  },
  updateVisit: function(visit) {
    return axios.put(`${root}/${visit.visit_id}`, visit)
      .then(response => response.data)
  }
}

export default visitApi
