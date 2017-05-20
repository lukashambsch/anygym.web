// @flow
import axios from 'axios';
import { render } from 'react-dom';

import config from './config';
import router from './router';

import 'skeleton-framework/dist/skeleton.css';
import 'font-awesome/css/font-awesome.css';

axios.defaults.baseURL = config.apiRoot;

render(router, document.getElementById('root'));
