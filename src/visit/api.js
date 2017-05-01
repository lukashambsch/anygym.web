// @flow
import axios from 'axios';

import type { Visit } from './types';

const root: string = '/visits';

const visitApi = {
  getVisits: (): Promise<Array<Visit>> => {
    return axios.get(root)
      .then(response => response.data);
  },
  createVisit: (visit: Visit): Promise<Visit> => {
    return axios.post(root, visit)
      .then(response => response.data);
  },
  updateVisit: (visit: Visit): Promise<Visit> => {
    return axios.put(`${root}/${visit.visit_id}`, visit)
      .then(response => response.data);
  }
}

export default visitApi;
