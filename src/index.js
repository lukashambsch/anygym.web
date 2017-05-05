// @flow
import axios from 'axios';
import { render } from 'react-dom';

import config from './config';
import router from './router';

axios.defaults.baseURL = config.apiRoot;

render(router, document.getElementById('root'));
